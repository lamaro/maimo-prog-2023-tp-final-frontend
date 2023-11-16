//muestro ordenes
import BOFunctionSwitch from '@/containers/BOFunctionSwitch'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function adminHome() {
  return (
    <main class='bg-white'> 
      <div class="container px-5 pt-24  mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h4 class=" text-indigo-500 tracking-widest font-medium title-font mb-1">¡Bienvenido!</h4>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-semibold">Administrador</h1>
        </div>
      </div>
      <div class=" justify-center ">
        <BOFunctionSwitch ></BOFunctionSwitch>
      </div>
    </main>
  )
}
