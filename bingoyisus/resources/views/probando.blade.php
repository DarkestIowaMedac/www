<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])

</head>

<body class="bg-cover bg-top h-screen" style="background-image: url('https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/05/19164507/abuelos-geriatrico-2.jpg')">

    <h1 class=" text-amber-900 text-8xl font-bold" id="titulo" style="margin: 20px; margin-left: 60px">¡¡¡BINGO!!!</h1>

    <div class="flex gap-5 justify-end">

<div class="relative flex justify-center items-center">
        <table class= "font-bold mb-0 mt-72 mr-12">
            <tr>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num3">3</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-yellow-950 bg-opacity-70"></td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num22">22</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-yellow-950 bg-opacity-70"></td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num41">41</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num52">52</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-yellow-950 bg-opacity-70"></td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-yellow-950 bg-opacity-70"></td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num89">89</td>
            </tr>
            <tr>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num7">7</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num12">12</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-yellow-950 bg-opacity-70"></td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num38">38</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-yellow-950 bg-opacity-70"></td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num57">57</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-yellow-950 bg-opacity-70"></td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num73">73</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-yellow-950 bg-opacity-70"></td>
            </tr>
            <tr>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-yellow-950 bg-opacity-70"></td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num18">18</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num25">25</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-yellow-950 bg-opacity-70"></td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num44">44</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-yellow-950 bg-opacity-70"></td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num64">64</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-white bg-opacity-70" id="num76">76</td>
                <td class=" w-14 h-14 text-center text-3xl font-bold border-4 border-yellow-500 bg-yellow-950 bg-opacity-70"></td>
            </tr>
        </table>
    </div>

    
        <div class=" bg-amber-900 flex flex-wrap justify-center py-4 px-4 border-solid border-8 rounded-3xl border-yellow-500 bg-opacity-40	" style="width: 500px; height:500px">

            @for ($i=1, $cont=1; $i<=9; $i++)
                <div class="flex flex-row gap-2">
                    @for ($j=1; $j<=10; $j++, $cont++)
                        <div class="rounded-full bg-yellow-100 w-10 h-10 text-center border-solid border-4 border-yellow-500" id="{{$cont}}">{{$cont}}</div>
                    @endfor
                </div>
            @endfor

        </div>

        <div class="flex items-center flex-col gap-5 mr-5">
            <div class=" w-60 h-60 bg-yellow-500 flex py-8 justify-center text-9xl rounded-full border-solid border-x-8 border-4 border-yellow-600" id="contador">--</div>
            <button id="boton" class=" py-4 bg-yellow-950 text-yellow-500 rounded-xl hover:bg-fuchsia-800 text-5xl px-10">Pulsar</button>
        </div>
    </div>
    
    <iframe id="youtubeAudio" width="0" height="0" src="https://www.youtube.com/embed/hVQpuS97xvc?autoplay=1&mute=0&controls=0&showinfo=0&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

</body>
</html>