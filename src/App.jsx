import { useState } from 'react'

function App() {

  return (
    <div className='sm:grid grid-cols-3 mt-40'>
      <img src="https://www.tunisianet.com.tn/374918-large/pc-portable-lenovo-ideapad-gaming-3-ryzen-5-5500h-rtx-2050-4g-16-go-512-go-ssd-noir.jpg" alt="" />
      <div>
        <p className='mb-4'>Reference: 82842555581458</p>
        <p>
        Écran 15.6" Full HD (1 920 x 1 080), IPS  antireflet 144Hz  - Processeur AMD Ryzen 5 5500H, (jusqu'à 4.2 GHz, 10 Mo de mémoire cache) - Mémoire 16 Go DDR4 - Disque SSD M.2 NVMe 512 Go - Carte graphique NVIDIA GeForce RTX 2050, 4 Go de mémoire GDDR6 dédiée - 2x Haut-parleurs Enceintes stéréo 2W - Caméra HD 720p - Clavier Rétroéclairage blanc - Wi-Fi 6 - Bluetooth 5.1 - 1x Ethernet (RJ-45) - 1x HDMI 2.0 - 1x prise combo casque/microphone (3.5 mm) - 1x USB-C 3.2 - 2x USB 3.2  - Couleur Noir - Garantie 1 an</p>
        <hr />
        <p>Disponibilite magasin</p>
        <table className='border w-full'>
          <tr className='border'>
            <th className='border bg-gray-100'>Magasin</th>
            <th className='border bg-gray-100'>Disponiblité</th>
          </tr>
          <tr className='border'>
            <td className='border'>Boutique Tunis</td>
            <td className='border'>Non disponible</td>
          </tr >
          <tr className='border'>
            <td className='border'>Sousse</td>
            <td className='border'> non disponible</td>
          </tr>
          <tr className='border'>
            <td className='border'>Sfax</td>
            <td className='border'>Non disponible</td>
          </tr>
          <tr className='border'>
            <td className='border'>Tunis Drive-in</td>
            <td className='border' >Disponible</td>
          </tr>
        </table>
        <p>Payez en plusieurs fois</p>
        <table className='w-full'>
          <tr className='border bg-gray-100'>
            <td>Payer en plusieurs fois</td>
          </tr>
          <tr className='border'>
            <td className='text-center'>
              <div className='flex justify-center'>
              <img src="https://www.tunisianet.com.tn/img/logo-banque-ubci.png" alt="" width={100}  />
              </div>
              <p>Voir conditions</p>
            </td>
          </tr>
        </table>

      </div>
      <div className='px-5 text-center'>
      <div className='bg-gray-100 h-[400px]' >
        <div className='flex justify-center'>
        <img src="https://www.tunisianet.com.tn/img/m/3.jpg" alt="" />
        </div>
        <p>1969,000 DT</p>
        <p>TTC</p>
        <p>Disponibilité: <span>En stock</span></p>
        <div className='flex items-center justify-center pt-5'>
        <p>Quantité: <span className='py-4 px-5 rounded-l-lg border bg-gray-50'>1</span></p><div><p className='bg-gray-50 border px-[3px] py-[0.5px]'>+</p><p className='bg-gray-50 border px-[2px]'>-</p></div>
        </div>

</div>
      </div>

    </div>
  )
}

export default App
