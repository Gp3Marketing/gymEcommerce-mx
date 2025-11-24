import { NextResponse } from "next/server";
import { db } from "@/firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const { uid, targetUid } = await req.json();
    const userDoc = await getDoc(doc(db, "users", uid));

    if (!userDoc.exists() || userDoc.data().role !== "superadmin") {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 403 }
      );
    }

    await updateDoc(doc(db, "users", targetUid), {
      role: "admin",
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { error: "Error interno" },
      { status: 500 }
    );
  }
}
