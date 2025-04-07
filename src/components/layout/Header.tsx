export function Header() {
  return (
    <header className="box-border flex justify-between items-center h-[62px] bg-[#252525] m-0 px-4 py-0 border-b-[rgba(0,0,0,0.1)] border-b border-solid">
      <div className="box-border w-[93px] h-8 m-0 p-0">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg id="37:2331" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-icon"> <path d="M27.2496 54.9967C42.2991 54.9967 54.4991 42.7966 54.4991 27.7471C54.4991 12.6976 42.2991 0.497556 27.2496 0.497556C12.2 0.497556 0 12.6976 0 27.7471C0 42.7966 12.2 54.9967 27.2496 54.9967Z" fill="#1E1E1E"></path> <path d="M38.6277 17.9061C37.9916 17.9071 37.3793 18.1478 36.913 18.5804C36.4466 19.0129 36.1605 19.6054 36.1118 20.2396V25.2846C36.1104 26.6025 35.5934 27.8674 34.6714 28.809C33.7493 29.7506 32.4955 30.294 31.178 30.323V14.04C31.178 13.0017 30.7655 12.0059 30.0313 11.2717C29.2971 10.5375 28.3013 10.125 27.2629 10.125C26.2246 10.125 25.2288 10.5375 24.4946 11.2717C23.7604 12.0059 23.3479 13.0017 23.3479 14.04V54.7186C25.9444 55.0938 28.5814 55.0938 31.178 54.7186V35.3659C33.8349 35.336 36.3729 34.2595 38.2411 32.3701C40.1093 30.4806 41.157 27.9306 41.1569 25.2735V20.2396C41.1085 19.6029 40.8207 19.0082 40.3514 18.5752C39.8821 18.1423 39.2662 17.9032 38.6277 17.9061Z" fill="#34C759"></path> <path d="M23.3389 14.04V40.3731C22.0193 40.3475 20.7623 39.8055 19.8378 38.8635C18.9132 37.9215 18.3949 36.6546 18.394 35.3347V30.2897C18.3409 29.6595 18.0531 29.0723 17.5875 28.6443C17.122 28.2163 16.5127 27.9788 15.8803 27.9788C15.248 27.9788 14.6387 28.2163 14.1731 28.6443C13.7076 29.0723 13.4198 29.6595 13.3667 30.2897V35.3347C13.3671 37.9899 14.4143 40.5379 16.2811 42.4259C18.148 44.314 20.6839 45.39 23.3389 45.4204V54.7342C24.5919 54.9084 25.8554 54.9961 27.1205 54.9967H27.2606V10.125C26.7459 10.1241 26.2361 10.2247 25.7604 10.4211C25.2846 10.6175 24.8522 10.9057 24.488 11.2693C24.1237 11.633 23.8347 12.0648 23.6376 12.5403C23.4404 13.0157 23.3389 13.5253 23.3389 14.04Z" fill="#34C759"></path> </svg>`,
          }}
        />
      </div>
      <nav className="box-border flex items-center gap-5 m-0 p-0 max-sm:hidden">
        <a
          href="#"
          className="box-border text-white text-[15px] cursor-pointer m-0 p-0 hover:text-[#34C759] transition-colors"
        >
          Lorem
        </a>
        <a
          href="#"
          className="box-border text-white text-[15px] cursor-pointer m-0 p-0 hover:text-[#34C759] transition-colors"
        >
          Lorem
        </a>
        <a
          href="#"
          className="box-border text-white text-[15px] cursor-pointer m-0 p-0 hover:text-[#34C759] transition-colors"
        >
          Lorem lorem
        </a>
        <a
          href="#"
          className="box-border text-white text-[15px] cursor-pointer m-0 p-0 hover:text-[#34C759] transition-colors"
        >
          Lorem
        </a>
        <button className="box-border text-white text-[13.5px] font-semibold bg-[#34C759] m-0 px-2.5 py-[5px] rounded-[5px] hover:bg-[#2db14e] transition-colors">
          Lorem
        </button>
      </nav>
    </header>
  );
}
