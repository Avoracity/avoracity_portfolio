export default function Modal() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-20 p-8">
      <div
        className="relative w-200 max-w-full aspect-5/3
        border-8 border-neutral-900
        rounded-tr-[5rem] rounded-bl-[5rem]
        shadow-2xl flex flex-col p-12 overflow-hidden"
      >
        {/* MOVING MODAL BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-neutral-800" />

   <div
  className="absolute inset-0 opacity-20
  bg-['/public/star.svg']
  bg-size-[1%]
  bg-center
  animate-[pan_60s_linear_infinite]"
/>

          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="grow flex items-center justify-center">
          <p className="text-white text-2xl text-center">
            Save progress?
          </p>
        </div>

        <div className="flex justify-center gap-8 max-lg:flex-col-reverse">
          {["OK"].map((label) => (
            <button
              key={label}
              className="w-64 p-3 text-xl rounded-xl  outline-4 outline-white outline-offset-4 bg-yellow-200 hover:bg-yellow-300 transition"
            >
              <span className="modal-action-text font-semibold text-black">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}