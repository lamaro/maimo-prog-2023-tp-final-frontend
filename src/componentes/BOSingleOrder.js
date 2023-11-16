import Image from 'next/image';

const BOSingleOrder = ({ show }) => {
  const { name, id, image, language, status, rating, genres, premiered, summary, webChannel } = show;
  const parsedSummary = <div dangerouslySetInnerHTML={{ __html: summary }} />;

  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto flex flex-col">
    <h1 class='text-center pb-8 text-4xl text-white font-bold'>{name}</h1>
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-96 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src={image?.original} />
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center ">
          <div class="flex flex-col items-center text-center justify-center">
            <h1 class="font-medium text-2xl title-font mt-4 text-white text-lg">DATITA</h1>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <ul class="text-base text-left">
            <li class="pb-2"><bold class="font-bold">Rating:</bold> {rating?.average || "-"} </li>

              <li class="pb-2"><bold class="font-bold">Premiere Date:</bold> {premiered || "-"} </li>
              <li class="pb-2"><bold class="font-bold">Language:</bold> {language || "-"} </li>
              <li class="pb-2"><bold class="font-bold">Status:</bold> {status || "-"} </li>
              <li class="pb-2"><bold class="font-bold">Channel:</bold> {webChannel?.name || "-"} </li>
              <li class="pb-2"><bold class="font-bold">Genre:</bold> {genres ? genres?.join(', ') : "-"} </li>



            </ul>

          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4" dangerouslySetInnerHTML={{ __html: summary }}></p>
          <a class="text-indigo-500 inline-flex items-center">Ir al siguiente
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>)};



export default BOSingleOrder;
