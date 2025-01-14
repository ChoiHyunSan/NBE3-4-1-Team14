"use client";
import Link from "next/link";

export default function ClientPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <div className="flex gap-2 p-5">
          <Link href="/">홈</Link>
          <Link href="/about">소개</Link>
          <Link href="/login"> 로그인 </Link>
        </div>
      </header>
      <main className="border-[2px] border-[blue]">{children}</main>
      <footer className="border-[2px] border-[green]">Copyright 2025.</footer>
    </>
  );
}
