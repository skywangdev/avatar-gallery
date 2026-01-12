"use client";

import { useState } from "react";

interface Avatar {
  id: string;
  static: string;
  dynamic: string;
}

export default function Home() {
  const [mode, setMode] = useState<"static" | "dynamic">("static");
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar | null>(null);

  const avatars: Avatar[] = Array.from({ length: 105 }, (_, i) => {
    const id = (50001 + i).toString();
    return {
      id,
      static: `/avatars/static/${id}.png`,
      dynamic: `/avatars/dynamic/${id.replace("5", "6")}.gif`,
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <img src="/favicon.svg" alt="企鹅logo" className="h-16 w-16" />
            <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-400 dark:to-pink-400">
              2019年像素风QQ头像
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            QQ 20周年纪念 · 105个精选头像
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            作者：SkyWang
          </p>
        </header>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setMode("static")}
            className={`rounded-full px-6 py-3 font-semibold transition-all ${
              mode === "static"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                : "bg-white text-gray-600 shadow-md dark:bg-gray-800 dark:text-gray-300"
            }`}
          >
            静态版 (PNG)
          </button>
          <button
            onClick={() => setMode("dynamic")}
            className={`rounded-full px-6 py-3 font-semibold transition-all ${
              mode === "dynamic"
                ? "bg-pink-600 text-white shadow-lg shadow-pink-500/50"
                : "bg-white text-gray-600 shadow-md dark:bg-gray-800 dark:text-gray-300"
            }`}
          >
            动态版 (GIF)
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
          {avatars.map((avatar) => (
            <div
              key={avatar.id}
              className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:bg-gray-800"
              onClick={() => setSelectedAvatar(avatar)}
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                <img
                  src={mode === "static" ? avatar.static : avatar.dynamic}
                  alt={`头像 ${avatar.id}`}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <p className="mt-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                #{avatar.id}
              </p>
              <p className="text-center text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                长按保存
              </p>
            </div>
          ))}
        </div>

        <footer className="mt-12 text-center">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm dark:bg-gray-800/80">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              使用说明
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              长按头像可保存到本地，点击头像可查看大图详情
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 SkyWang · 像素风头像展示
            </p>
          </div>
        </footer>

        {selectedAvatar && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedAvatar(null)}
          >
            <div className="relative max-w-4xl p-4">
              <button
                onClick={() => setSelectedAvatar(null)}
                className="absolute -top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-all hover:bg-white/20"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="overflow-hidden rounded-3xl bg-white p-8 shadow-2xl dark:bg-gray-900">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    头像 #{selectedAvatar.id}
                  </h3>
                </div>
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex-1">
                    <p className="mb-2 font-semibold text-gray-700 dark:text-gray-300">静态版 (PNG)</p>
                    <div className="overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                      <img
                        src={selectedAvatar.static}
                        alt={`静态头像 ${selectedAvatar.id}`}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="mb-2 font-semibold text-gray-700 dark:text-gray-300">动态版 (GIF)</p>
                    <div className="overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                      <img
                        src={selectedAvatar.dynamic}
                        alt={`动态头像 ${selectedAvatar.id}`}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
