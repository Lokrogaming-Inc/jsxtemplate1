export default function Divider() {
  return (
    <div className="relative">
  <div className="absolute inset-x-0 -bottom-3 h-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 blur-xl opacity-30"></div>
    <div className="w-full flex items-center my-8">
      <div className="flex-1 h-2 bg-black" />
    </div>
    </div>
  );
}
