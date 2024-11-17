<!DOCTYPE html>
<html lang="en" class="h-full bg-gradient-to-b from-purple-700 via-indigo-900 to-purple-700">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El bingo</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="min-h-full flex flex-col items-center justify-center p-4 sm:p-8">
    <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl p-4 sm:p-8 w-full max-w-5xl">
        <h1 class="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">Bingo Game</h1>
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div class="w-full lg:w-1/4 order-2 lg:order-1">
                <div id="activarrueda" class="sm:h-48 sm:w-48 mx-auto lg:h-64 bg-no-repeat bg-center bg-cover rounded-lg shadow-lg"></div>
            </div>
            <div class="w-full lg:w-2/4 order-1 lg:order-2 overflow-x-auto">
                <div class="rounded-lg p-2 sm:p-4 shadow-inner bg-white bg-opacity-5 min-w-[300px]">
                    @for ($i=0, $cont=1; $i<=8; $i++)
                        <div class="flex gap-1 mb-1 justify-center">
                        @for ($j=0; $j<=9; $j++, $cont++)
                        <div id="a{{$i.$j}}" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg shadow-lg border-2 border-amber-600 relative overflow-hidden transform transition-transform hover:scale-110"
                        style="background: radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b);">
                            <div id="b{{$i.$j}}" class="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none"></div>
                            <div id="c{{$i.$j}}" class="absolute -inset-1/2 bg-gradient-to-t from-black/30 to-transparent transform rotate-45 pointer-events-none"></div>
                            <span id="d{{$i.$j}}" class="relative z-10 drop-shadow-md">{{$cont}}</span>
                        </div>
                        @endfor
                        </div>
                    @endfor
                </div>
            </div>
            <div class="w-full lg:w-1/4 flex flex-col items-center gap-4 sm:gap-6 order-3">
                <div class="relative w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full flex items-center justify-center overflow-hidden group" id="bingo-ball">
                    <div class="absolute inset-0 bingo-ball-gradient rounded-full"></div>
                    <div class="absolute inset-0 bingo-ball-shine rounded-full"></div>
                    <div class="absolute inset-0 bingo-ball-shadow rounded-full"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-white/40 to-transparent blur-sm"></div>
                    </div>
                    <div class="absolute inset-0 rounded-full shadow-inner"></div>
                    <div class="absolute inset-0 rounded-full shadow-lg"></div>
                    <div class="relative z-10 text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg transition-all duration-300 ease-in-out transform group-hover:scale-110" id="contador">0</div>
                    <div class="absolute inset-0 bg-white/5 rounded-full transform scale-105 blur-sm transition-transform duration-300 ease-in-out group-hover:scale-110"></div>
                    <div class="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 ease-in-out"></div>
                </div>
                <div id="botonsitos" class="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                <button id="botonjugar" class="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                    Juego Digital
                </button>
                <button id="botonjugar2" class="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                    Juego Clásico
                </button>
                </div>
                <div id="botonsitos2" class="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-6">
                <button id="botoncarton" class="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                    Generar Cartón
                </button>
                </div>
                <button id="botonserie" class="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                    Generar Serie
                </button>
            </div>
        </div>
    </div>
    <div class="min-h-full flex flex-row md:flex-wrap items-center gap-5 justify-center p-4 sm:p-8" id="cartones">
        
    </div>
</body>
</html>