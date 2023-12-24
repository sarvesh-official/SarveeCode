export default function Home() {
  return (
    <>
      <main>
        <section id="home" className="relative">
          <div className="w-80 h-80 bg-color-blob absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
          <div className="w-80 h-80 bg-color-secondary absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>

          <div className="container py-20 ">
            <div className="flex flex-col items-center z-20 md:flex-row">
              <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
                <h1 className="title mb-4">Awesome App for Your Financial.</h1>
                <p className="leading-relaxed mb-10">
                  This should be used to tell a story and let your users know a
                  little more about app and it’s use, How can benefit them.
                </p>
                <button className="btn">Download App</button>
              </div>
              <div className="md:w-1/2">
                <img src="/img/hero4.png" alt="" className="" />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="bg-color-primary-light">
          <div className="container py-20">
            <div className="text-center m-auto mb-20 md:w-1/2">
              <h4 className="font-bold text-color-secondary mb-4">
                Our Feature
              </h4>
              <h1 className="title">
                Easy To Manage Your All Payments By Our App
              </h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2  justify-center gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
              {/* card 1 */}
              <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl  cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                  <i className="fa-solid fa-calendar-days text-4xl"></i>
                </div>
                <h3 className="text-xl font-bold py-4">Expense Tracking</h3>
                <p className="leading-relaxed">
                  We use an application designed a testing gnose to keep away
                </p>
              </div>
              {/* card 2 */}
              <div className=" bg-color-primary-dark border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl  cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                  <i className="fa-solid fa-calendar-days text-4xl"></i>
                </div>
                <h3 className="text-xl font-bold py-4">Expense Tracking</h3>
                <p className="leading-relaxed">
                  We use an application designed a testing gnose to keep away
                </p>
              </div>
              {/* card 3 */}
              <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl  cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                  <i className="fa-solid fa-calendar-days text-4xl"></i>
                </div>
                <h3 className="text-xl font-bold py-4">Expense Tracking</h3>
                <p className="leading-relaxed">
                  We use an application designed a testing gnose to keep away
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="saving-money">
          <div className="container py-20 relative">
            <div className="blob1"></div>
            <div className="blob2"></div>

            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-12 md:w-1/2">
                <img src="./img/hero3.png" alt="" />
              </div>
              <div className="text-center md:text-left md:w-1/2 md:ml-20">
                <h4 className="font-bold text-color-secondary mb-4">
                  Saving Money
                </h4>
                <h1 className="title mb-4">
                  Best Financing App To Save Your Money
                </h1>
                <p className="leading-relaxed mb-10">
                  Best financing app ever in the world. Easy to use and very
                  user friendly for mobile banking. You can control your card
                  easily and send money some one just one click.
                </p>
                <button className="btn">Read More</button>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="bg-color-primary-light">
          <div className="container py-20">
            <div className="text-center m-auto mb-20 md:w-1/2">
              <h4 className="font-bold text-color-secondary mb-4">
                How It Works
              </h4>
              <h1 className="title">Grow Up Your Money Saving</h1>
            </div>
            <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6">
              {/* <!-- card 1  --> */}
              <div className="text-center cursor-pointer">
                <div className="relative bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200">
                  <p className="text-6xl lg:after:content-[''] lg:after:flex lg:after:bg-[url('/img/line.png')] lg:after:absolute lg:after:top-4 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat lg:after:h-7 lg:after:w-52">
                    1
                  </p>
                </div>
                <h3 className="text-xl font-bold py-4">Install The App</h3>
                <p className="leading-relaxed">
                  We use an application designed a testing gnose to keep away
                </p>
              </div>
              {/* <!-- card 2  --> */}
              <div className="text-center cursor-pointer">
                <div className="relative inline-block px-6 py-3 rounded-lg cursor-pointer bg-color-secondary">
                  <p className="text-6xl lg:after:content-[''] lg:after:flex lg:after:bg-[url('/img/line-bottom.png')] lg:after:absolute lg:after:top-10 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat lg:after:h-7 lg:after:w-52">
                    2
                  </p>
                </div>
                <h3 className="text-xl font-bold py-4">Setup Your Profile</h3>
                <p className="leading-relaxed">
                  We use an application designed a testing gnose to keep away
                </p>
              </div>
              {/* <!-- card 3  --> */}
              <div className="text-center cursor-pointer">
                <div className="relative bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200">
                  <p className="text-6xl">3</p>
                </div>
                <h3 className="text-xl font-bold py-4">Enjoy The Features!</h3>
                <p className="leading-relaxed">
                  We use an application designed a testing gnose to keep away
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonial">
          <div className="container py-20">
            <div className="text-center m-auto mb-20 md:w-1/2">
              <h4 className="font-bold text-color-secondary mb-4">
                User Review
              </h4>
              <h1 className="title">
                What Clients Say About Our App After Use It
              </h1>
            </div>
            {/* <!-- review container  --> */}
            <div className="mt-8">
              <div className="flex items-center justify-center flex-wrap">
                <img
                  src="./img/user1.jpg"
                  alt=""
                  className="h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic active-pic"
                  onclick="showReview()"
                />
                <img
                  src="./img/user2.jpg"
                  alt=""
                  className="h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic"
                  onclick="showReview()"
                />
                <img
                  src="./img/user3.jpg"
                  alt=""
                  className="h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic"
                  onclick="showReview()"
                />
                <img
                  src="./img/user4.jpg"
                  alt=""
                  className="h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic"
                  onclick="showReview()"
                />
                <img
                  src="./img/user5.jpg"
                  alt=""
                  className="h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic"
                  onclick="showReview()"
                />
              </div>
              <div className="grid place-items-center text-center m-auto md:w-4/5 min-h-[40vh]">
                <div className="user-text active-text">
                  <p className="md:text-2xl mb-6">
                    "This should be used to tell a story and include any
                    testimonials you might have about your product or service
                    for your clients"!
                  </p>
                  <h4 className="font-bold text-color-secondary mb-1">
                    Markin Nesus
                  </h4>
                  <p>IOS developer</p>
                </div>
                <div className="user-text">
                  <p className="md:text-2xl mb-6">
                    "This should be used to tell a story and include any
                    testimonials you might have about your product or service
                    for your clients"!
                  </p>
                  <h4 className="font-bold text-color-secondary mb-1">
                    Vera Duncan
                  </h4>
                  <p>Flutter developer</p>
                </div>
                <div className="user-text">
                  <p className="md:text-2xl mb-6">
                    "This should be used to tell a story and include any
                    testimonials you might have about your product or service
                    for your clients"!
                  </p>
                  <h4 className="font-bold text-color-secondary mb-1">
                    Pirtle Karol
                  </h4>
                  <p>Android developer</p>
                </div>
                <div className="user-text">
                  <p className="md:text-2xl mb-6">
                    "This should be used to tell a story and include any
                    testimonials you might have about your product or service
                    for your clients"!
                  </p>
                  <h4 className="font-bold text-color-secondary mb-1">
                    Mark Joe
                  </h4>
                  <p>React developer</p>
                </div>
                <div className="user-text">
                  <p className="md:text-2xl mb-6">
                    "This should be used to tell a story and include any
                    testimonials you might have about your product or service
                    for your clients"!
                  </p>
                  <h4 className="font-bold text-color-secondary mb-1">
                    Leila Domniuc
                  </h4>
                  <p>Angular developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="bg-color-primary-light">
          <div className="container py-20">
            <div className="text-center m-auto mb-20 md:w-1/2">
              <h4 className="font-bold text-color-secondary mb-4">Pricing</h4>
              <h1 className="title">Get In Reasonable Price</h1>
              {/* <!-- Rounded switch  --> */}
              <div className="mt-5 flex items-center justify-center gap-4">
                <p>Bill Monthly</p>
                <label className="cursor-pointer relative inline-block w-20 h-8 rounded-full">
                  <input
                    type="checkbox"
                    id="toggleBtn"
                    className="peer opacity-0 w-0 h-0"
                  />
                  <span className="absolute top-0 left-0 right-0 bottom-0 bg-color-primary-light border border-solid border-color-gray rounded-full duration-300 before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-color-secondary"></span>
                </label>
                <p>Bill Anually</p>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {/* <!-- card 1 --> */}
              <div className="card relative h-auto w-auto">
                {/* <!-- front side  --> */}
                <div
                  id="card_1_front"
                  className="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full"
                >
                  <div className="relative">
                    <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                      20
                      <span className="text-sm font-normal tracking-widest">
                        /per month
                      </span>
                    </p>
                  </div>
                  <div className="py-10">
                    <h3 className="text-xl font-bold pb-3">Basic</h3>
                    <p className="leading-relaxed">
                      For Beginner Who Want To Scale Business Globaly
                    </p>
                  </div>
                  <ul className="space-y-4 pb-10">
                    <li>
                      <i className="fa-solid fa-bookmark text-color-secondary"></i>
                      <span className="pl-4">Expense Management</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-secondary"></i>
                      <span className="pl-4">Card Management</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Instant Statistics</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Bookmark Function</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Accounting System</span>
                    </li>
                  </ul>
                  <button className="card_btn">Get Started</button>
                </div>
                {/* <!-- back side  --> */}
                <div
                  id="card_1_back"
                  className="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0"
                >
                  <div className="relative">
                    <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                      120
                      <span className="text-sm font-normal tracking-widest">
                        /per month
                      </span>
                    </p>
                  </div>
                  <div className="py-10">
                    <h3 className="text-xl font-bold pb-3">Basic</h3>
                    <p className="leading-relaxed">
                      For Beginner Who Want To Scale Business Globaly
                    </p>
                  </div>
                  <ul className="space-y-4 pb-10">
                    <li>
                      <i className="fa-solid fa-bookmark text-color-secondary"></i>
                      <span className="pl-4">Expense Management</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-secondary"></i>
                      <span className="pl-4">Card Management</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Instant Statistics</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Bookmark Function</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Accounting System</span>
                    </li>
                  </ul>
                  <button className="card_btn">Get Started</button>
                </div>
              </div>
              {/* <!-- card 2 --> */}
              <div className="card relative h-auto w-auto">
                {/* <!-- front side  --> */}
                <div
                  id="card_2_front"
                  className="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full"
                >
                  <div className="relative">
                    <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                      50
                      <span className="text-sm font-normal tracking-widest">
                        /per month
                      </span>
                    </p>
                  </div>
                  <div className="py-10">
                    <h3 className="text-xl font-bold pb-3">Standard</h3>
                    <p className="leading-relaxed">
                      For Beginner Who Want To Scale Business Globaly
                    </p>
                  </div>
                  <ul className="space-y-4 pb-10">
                    <li>
                      <i className="fa-solid fa-bookmark text-color-secondary"></i>
                      <span className="pl-4">Expense Management</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-secondary"></i>
                      <span className="pl-4">Card Management</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Instant Statistics</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Bookmark Function</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Accounting System</span>
                    </li>
                  </ul>
                  <button className="card_btn">Get Started</button>
                </div>
                {/* <!-- back side  --> */}
                <div
                  id="card_2_back"
                  className="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0"
                >
                  <div className="relative">
                    <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                      150
                      <span className="text-sm font-normal tracking-widest">
                        /per month
                      </span>
                    </p>
                  </div>
                  <div className="py-10">
                    <h3 className="text-xl font-bold pb-3">Standard</h3>
                    <p className="leading-relaxed">
                      For Beginner Who Want To Scale Business Globaly
                    </p>
                  </div>
                  <ul className="space-y-4 pb-10">
                    <li>
                      <i className="fa-solid fa-bookmark text-color-secondary"></i>
                      <span className="pl-4">Expense Management</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-secondary"></i>
                      <span className="pl-4">Card Management</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Instant Statistics</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Bookmark Function</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Accounting System</span>
                    </li>
                  </ul>
                  <button className="card_btn">Get Started</button>
                </div>
              </div>
              {/* <!-- card 3 --> */}
              <div className="card relative h-auto w-auto">
                {/* <!-- front side  --> */}
                <div
                  id="card_3_front"
                  className="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full"
                >
                  <div className="relative">
                    <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                      100
                      <span className="text-sm font-normal tracking-widest">
                        /per month
                      </span>
                    </p>
                  </div>
                  <div className="py-10">
                    <h3 className="text-xl font-bold pb-3">Basic</h3>
                    <p className="leading-relaxed">
                      For Beginner Who Want To Scale Business Globaly
                    </p>
                  </div>
                  <ul className="space-y-4 pb-10">
                    <li>
                      <i className="fa-solid fa-bookmark text-color-secondary"></i>
                      <span className="pl-4">Expense Management</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-secondary"></i>
                      <span className="pl-4">Card Management</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Instant Statistics</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Bookmark Function</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Accounting System</span>
                    </li>
                  </ul>
                  <button className="card_btn">Get Started</button>
                </div>
                {/* <!-- back side  --> */}
                <div
                  id="card_3_back"
                  className="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0"
                >
                  <div className="relative">
                    <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                      500
                      <span className="text-sm font-normal tracking-widest">
                        /per month
                      </span>
                    </p>
                  </div>
                  <div className="py-10">
                    <h3 className="text-xl font-bold pb-3">Premium</h3>
                    <p className="leading-relaxed">
                      For Beginner Who Want To Scale Business Globaly
                    </p>
                  </div>
                  <ul className="space-y-4 pb-10">
                    <li>
                      <i className="fa-solid fa-bookmark text-color-secondary"></i>
                      <span className="pl-4">Expense Management</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-secondary"></i>
                      <span className="pl-4">Card Management</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Instant Statistics</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Bookmark Function</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bookmark text-color-gray"></i>
                      <span className="pl-4">Accounting System</span>
                    </li>
                  </ul>
                  <button className="card_btn">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="blog">
          <div className="container py-20">
            <div className="text-center m-auto mb-20 md:w-1/2">
              <h4 className="font-bold text-color-secondary mb-4">
                Innovation And Quality Improvement
              </h4>
              <h1 className="title">
                Latest Updates, Solutions And Company News
              </h1>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {/* <!-- card no 1 --> */}
              <div>
                <div className="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                  <img
                    src="./img/blog1.jpg"
                    alt=""
                    className="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-5 py-5">
                    <p>20 August 2022</p>
                    <p>1 min read</p>
                  </div>

                  <a
                    href="#blog"
                    className="text-2xl font-bold underline hover:text-color-secondary hover:no-underline"
                  >
                    Four ways to cheer yourself up on Blue Monday!
                  </a>

                  <p className="leading-relaxed my-5">
                    On the second edition of Serious Business, Inc. editor Jim
                    Ledbetter and Fusion senior editor Salmon debate...
                  </p>

                  <a
                    href="#blog"
                    className="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out"
                  >
                    <span className="tracking-wider capitalize underline hover:no-underline">
                      Read more
                    </span>
                  </a>
                </div>
              </div>
              {/* <!-- card no 2 --> */}
              <div>
                <div className="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                  <img
                    src="./img/blog2.jpg"
                    alt=""
                    className="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-5 py-5">
                    <p>20 August 2022</p>
                    <p>1 min read</p>
                  </div>

                  <a
                    href="#blog"
                    className="text-2xl font-bold underline hover:text-color-secondary hover:no-underline"
                  >
                    How to Organize Your budget for Maximum Productivity?
                  </a>

                  <p className="leading-relaxed my-5">
                    Global provider connected products for consumers, and
                    enterprises worldwide, supply chain control is everything...
                  </p>

                  <a
                    href="#blog"
                    className="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out"
                  >
                    <span className="tracking-wider capitalize underline hover:no-underline">
                      Read more
                    </span>
                  </a>
                </div>
              </div>
              {/* <!-- card no 3 --> */}
              <div>
                <div className="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                  <img
                    src="./img/blog3.jpg"
                    alt=""
                    className="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-5 py-5">
                    <p>20 August 2022</p>
                    <p>1 min read</p>
                  </div>
                  <a
                    href="#blog"
                    className="text-2xl font-bold underline hover:text-color-secondary hover:no-underline"
                  >
                    Should Small Businesses Be Entitled to system?
                  </a>
                  <p className="leading-relaxed my-5">
                    Our team provides skilled & experienced managers who know
                    the intricacies of this vertical and focus...
                  </p>
                  <a
                    href="#blog"
                    className="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out"
                  >
                    <span className="tracking-wider capitalize underline hover:no-underline">
                      Read more
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="download-app" className="bg-color-primary-light">
          <div className="container h-[80vh] grid place-items-center">
            <div className="text-center md:w-2/3 m-auto">
              <h1 className="title">Download App Now And Save Your Money</h1>
              <p className="leading-relaxed pt-5">
                Serving an impressive list of long-term money with experience
                and expertise in multiple industries.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-10">
                <a
                  href="#"
                  className="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70"
                >
                  <img src="./img/ios-store-dark.png" alt="" />
                </a>
                <a
                  href="#"
                  className="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70"
                >
                  <img src="./img/g-play-dark.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="container py-20">
            <div className="text-center m-auto mb-20 md:w-1/2">
              <h4 className="font-bold text-color-secondary mb-4">
                Have A Questation
              </h4>
              <h1 className="title">Get In Touch</h1>
            </div>
            <form>
              <div className="w-full m-auto text-center md:w-2/3">
                <div className="text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2">
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                    placeholder="Email"
                  />
                  <input
                    type="tel"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                    placeholder="Company"
                  />
                </div>
                <textarea
                  rows="4"
                  className="text-color-primary-dark bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                  placeholder="Message"
                ></textarea>
                <button className="btn mt-10">Send Message</button>
              </div>
            </form>
          </div>
        </section>
        <section id="footer">
          <div className="bg-color-primary-dark relative">
            <div className="container py-10">
              <div className="grid gap-10 md:grid-cols-3 pb-10">
                <div className="space-y-6">
                  <h4 className="font-bold text-lg">About App</h4>
                  <p className="leading-relaxed">
                    This Should Be Used To Tell A Story And Include Any
                    Testimonials You Might Have About Your Product Or Service
                    For Your Clients
                  </p>
                  <div className="flex gap-5 items-center">
                    <p>Follow Us</p>
                    <i className="fa-brands fa-facebook-f cursor-pointer hover:text-color-secondary"></i>
                    <i className="fa-brands fa-twitter cursor-pointer hover:text-color-secondary"></i>
                    <i className="fa-brands fa-youtube cursor-pointer hover:text-color-secondary"></i>
                    <i className="fa-brands fa-instagram cursor-pointer hover:text-color-secondary"></i>
                  </div>
                </div>
                <div className="flex justify-between md:justify-around">
                  <div className="space-y-6">
                    <h4 className="font-bold text-lg">Quick Links</h4>
                    <ul className="space-y-3">
                      <li className="underline hover:no-underline hover:text-color-secondary">
                        <a href="#">Home</a>
                      </li>
                      <li className="underline hover:no-underline hover:text-color-secondary">
                        <a href="#features">Features</a>
                      </li>
                      <li className="underline hover:no-underline hover:text-color-secondary">
                        <a href="#testimonial">Testimonial</a>
                      </li>
                      <li className="underline hover:no-underline hover:text-color-secondary">
                        <a href="#pricing">Pricing</a>
                      </li>
                      <li className="underline hover:no-underline hover:text-color-secondary">
                        <a href="#blog">Blog</a>
                      </li>
                      <li className="underline hover:no-underline hover:text-color-secondary">
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-bold text-lg">Help</h4>
                    <ul className="space-y-3">
                      <li className="underline hover:no-underline hover:text-color-secondary">
                        <a href="#">About Us</a>
                      </li>
                      <li className="underline hover:no-underline hover:text-color-secondary">
                        <a href="#features">Partners</a>
                      </li>
                      <li className="underline hover:no-underline hover:text-color-secondary">
                        <a href="#testimonial">Career</a>
                      </li>
                      <li className="underline hover:no-underline hover:text-color-secondary">
                        <a href="#pricing">Reviews</a>
                      </li>
                      <li className="underline hover:no-underline hover:text-color-secondary">
                        <a href="#blog">Terms & Conditions</a>
                      </li>
                      <li className="underline hover:no-underline hover:text-color-secondary">
                        <a href="#contact">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="font-bold text-lg">Newsletter</h4>
                  <p className="leading-relaxed">
                    Subscribe With Email And Loads Of News Will Be Sent To You
                  </p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-3/4 text-color-gray bg-color-white p-2 lg:p-3 rounded-l-md focus:outline-none"
                      placeholder="Enter Your Email"
                    />

                    <button
                      type="submit"
                      className="bg-color-secondary px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90"
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center pt-10 border-t border-color-gray">
                <p>2023 &copy; LightCode. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
