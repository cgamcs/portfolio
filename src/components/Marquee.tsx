function Marquee() {
  return (
    <>
      <div className="marquee">
        <ul className="marquee__content">
          <div className="marquee__item">
            <img src="/git_light.png" alt="logo de git" className="block dark:hidden" />
            <img src="/git_dark.png" alt="logo de git" className="hidden dark:block" />
          </div>
          <div className="marquee__item">
            <img src="/react_light.png" alt="logo de react" className="block dark:hidden" />
            <img src="/react_dark.png" alt="logo de react" className="hidden dark:block" />
          </div>
          <div className="marquee__item">
            <img src="/typescript_light.png" alt="logo de typescript" className="block dark:hidden" />
            <img src="/typescript_dark.png" alt="logo de typescript" className="hidden dark:block" />
          </div>
          <div className="marquee__item">
            <img src="/postgress_light.png" alt="logo de postgress" className="block dark:hidden" />
            <img src="/postgress_dark.png" alt="logo de postgress" className="hidden dark:block" />
          </div>
          <div className="marquee__item">
            <img src="/php_light.png" alt="logo de php" className="block dark:hidden" />
            <img src="/php_dark.png" alt="logo de php" className="hidden dark:block" />
          </div>
          <div className="marquee__item">
            <img src="/python_light.png" alt="logo de python" className="block dark:hidden" />
            <img src="/python_dark.png" alt="logo de python" className="hidden dark:block" />
          </div>
        </ul>

        <ul aria-hidden="true" className="marquee__content">
          <div className="marquee__item">
            <img src="/git_light.png" alt="logo de git" className="block dark:hidden" />
            <img src="/git_dark.png" alt="logo de git" className="hidden dark:block" />
          </div>
          <div className="marquee__item">
            <img src="/react_light.png" alt="logo de python" className="block dark:hidden" />
            <img src="/react_dark.png" alt="logo de python" className="hidden dark:block" />
          </div>
          <div className="marquee__item">
            <img src="/typescript_light.png" alt="logo de typescript" className="block dark:hidden" />
            <img src="/typescript_dark.png" alt="logo de typescript" className="hidden dark:block" />
          </div>
          <div className="marquee__item">
            <img src="/postgress_light.png" alt="logo de postgress" className="block dark:hidden" />
            <img src="/postgress_dark.png" alt="logo de postgress" className="hidden dark:block" />
          </div>
          <div className="marquee__item">
            <img src="/php_light.png" alt="logo de php" className="block dark:hidden" />
            <img src="/php_dark.png" alt="logo de php" className="hidden dark:block" />
          </div>
          <div className="marquee__item">
            <img src="/python_light.png" alt="logo de python" className="block dark:hidden" />
            <img src="/python_dark.png" alt="logo de python" className="hidden dark:block" />
          </div>
        </ul>
      </div>
    </>
  )
}

export default Marquee
