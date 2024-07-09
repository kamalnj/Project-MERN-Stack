import React from 'react';

const Mdpoublier = () => {
    return (
        <section className="bg-slate-100 py-20 dark:bg-dark lg:py-[120px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                  <div className="mb-10 text-center md:mb-16">
                    <a
                      href="/#"
                      className="mx-auto inline-block max-w-[160px]"
                    >
                      <img
                        src="https://www.eccbc.com/wp-content/uploads/2022/04/ECCBC_Logo.png"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <p className=' mb-6 text-xl'>Veuiller enter votre Adresse email , et nous vous enverrons un lien pour récupérer votre compte.</p>
                  <form action='POST'>
                    <InputBox type="email" name="email" placeholder="Email" />
                    <div className="mb-10">
                      <input
                        type="submit"
                        value="Envoyer"
                        className="w-full cursor-pointer bg-red-600  rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };
    
    
    const InputBox = ({ type, placeholder, name }) => {
      return (
        <div className="mb-6">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
          />
        </div>
      );
}

export default Mdpoublier;
