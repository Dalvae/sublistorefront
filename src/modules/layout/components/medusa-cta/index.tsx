const MedusaCTA = () => {
  return (
    <div className="py-4 flex justify-center items-center w-full">
      <div className="content-container flex justify-center flex-1">
        <a href="https://github.com/Dalvae" target="_blank" rel="noreferrer">
          <span className="text-xsmall-regular text-white-500">
            Creado por Dalvae
          </span>
        </a>
      </div>
    </div>
  )
}

const PoweredBy = () => {
  return (
    <svg
      width="158"
      height="24"
      viewBox="0 0 158 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_106_685)"></g>
      <defs>
        <clipPath id="clip0_106_685">
          <rect
            width="157"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default MedusaCTA
