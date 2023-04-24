import vectorOne from "../assests/images/bg/subscribe-bg-1.png";
import vectorTwo from "../assests/images/bg/subscribe-bg-2.png";


const SubscribeNow = () => {
  return (
    <>
      <section className="bg-primary-orange  rounded-lg ">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-white sm:text-4xl dark:text-white">
              Join Our Member and <br />
              Get discount Up to 50%
            </h2>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm border border-white rounded-lg sm:rounded-none sm:rounded-l-lg "
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-3 w-full text-sm font-bold  border border-white  rounded-r-lg text-primary-orange bg-white cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscribeNow;
