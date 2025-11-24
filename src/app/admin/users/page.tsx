"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "@/hooks/useAuth";

interface UserItem {
  uid: string;
  email: string;
  role?: string;
}

export default function UsersAdminPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);

  if (user?.role !== "superadmin") {
    return <div className="p-6 text-red-600">❌ No tienes permisos.</div>;
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const list: UserItem[] = [];

      querySnapshot.forEach((docSnap) =>
        list.push({
          uid: docSnap.id,
          email: docSnap.data().email,
          role: docSnap.data().role,
        })
      );

      setUsers(list);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const makeAdmin = async (targetUid: string) => {
    const res = await fetch("/api/make-admin", {
      method: "POST",
      body: JSON.stringify({
        uid: user?.uid,
        targetUid,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Usuario promovido a admin");
      setUsers((prev) =>
        prev.map((u) => (u.uid === targetUid ? { ...u, role: "admin" } : u))
      );
    } else {
      alert("Error: " + data.error);
    }
  };

  if (loading) return <div className="p-6">Cargando usuarios...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestión de Usuarios</h1>

      <table className="w-full border-collapse border rounded-xl overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-3 text-left">UID</th>
            <th className="border px-4 py-3 text-left">Email</th>
            <th className="border px-4 py-3 text-left">Rol</th>
            <th className="border px-4 py-3 text-left">Acción</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.uid}>
              <td className="border px-4 py-3">{u.uid}</td>
              <td className="border px-4 py-3">{u.email}</td>
              <td className="border px-4 py-3">{u.role || "user"}</td>
              <td className="border px-4 py-3">
                {u.role === "admin" ? (
                  <span className="text-green-600 font-semibold">Admin</span>
                ) : (
                  <button
                    onClick={() => makeAdmin(u.uid)}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Hacer Admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
