import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-slate-800/90 backdrop-blur border border-slate-700 rounded-2xl p-8 shadow-2xl text-center space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <i className="fa-solid fa-mobile-screen-button text-sm"></i>
          PhoneStore Design System
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Thế Giới Điện Thoại Di Động
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Đã đồng bộ thành công Font chữ <strong className="text-blue-400">Plus Jakarta Sans</strong>, hệ màu công nghệ và bộ icon <strong className="text-amber-400">FontAwesome 6</strong>.
        </p>

        {/* Demo Icons & Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-all duration-200 active:scale-95"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            Giỏ Hàng ({count})
          </button>

          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600 transition-all duration-200">
            <i className="fa-solid fa-truck-fast text-emerald-400"></i>
            Giao Nhanh 2H
          </button>

          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600 transition-all duration-200">
            <i className="fa-solid fa-shield-halved text-cyan-400"></i>
            Bảo Hành 12T
          </button>
        </div>

        {/* Tech Specs demo cards */}
        <div className="pt-6 border-t border-slate-700/80 grid grid-cols-3 gap-3 text-center text-xs">
          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-700">
            <i className="fa-solid fa-microchip text-blue-400 text-lg mb-1 block"></i>
            <span className="text-slate-400">Chipset</span>
            <p className="font-bold text-slate-200 mt-0.5">Apple A18 Pro</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-700">
            <i className="fa-solid fa-camera text-rose-400 text-lg mb-1 block"></i>
            <span className="text-slate-400">Camera</span>
            <p className="font-bold text-slate-200 mt-0.5">48MP Pro Zoom</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-700">
            <i className="fa-solid fa-battery-full text-emerald-400 text-lg mb-1 block"></i>
            <span className="text-slate-400">Pin & Sạc</span>
            <p className="font-bold text-slate-200 mt-0.5">4685 mAh 30W</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
