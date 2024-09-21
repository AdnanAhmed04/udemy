import React from 'react'

const CompaniesLogo = () => {
    return (
      <div className="flex justify-center items-center flex-col h-auto py-8 gap-4 bg-gray-200">
        <p className="text-gray-800 text-center text-lg px-4">
          Trusted by over 16,000 companies and millions of learners around the world
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <img
            className="w-24 h-10 md:w-20 md:h-16"
            src="https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals"
            alt="Volkswagen"
          />
          <img
            className="w-24 h-10 md:w-28 md:h-16"
            src="https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals"
            alt="Samsung"
          />
          <img
            className="w-24 h-10 md:w-28 md:h-16"
            src="https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals"
            alt="Cisco"
          />
          <img
            className="w-24 h-14 md:w-28 md:h-16"
            src="https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals"
            alt="Vimeo"
          />
          <img
            className="w-24 h-10 md:w-28 md:h-16"
            src="https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals"
            alt="Procter & Gamble"
          />
          <img
            className="w-24 h-10 md:w-28 md:h-16"
            src="https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals"
            alt="Hewlett Packard"
          />
          <img
            className="w-24 h-10 md:w-28 md:h-16"
            src="https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals"
            alt="Citi"
          />
          <img
            className="w-24 h-10 md:w-28 md:h-16"
            src="https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals"
            alt="Ericsson"
          />
        </div>
      </div>
    );
  };

export default CompaniesLogo
