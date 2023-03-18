import { React, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import './../css/animations.css';


export const ThankYouPage = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true, margin: "-100px"})

  return (
      <div id='Thank-You' 
      className='  font-Montserrat 2xl:px-48 px-5 py-14 md:px-20 md:min-h-screen
                   flex items-center justify-center overflow-x-hidden
                   text-offWhite'
      >

       <div 
           className='flex flex-col md:flex-row'
           ref={ref}
       >


           <div
               id='text-section'
               className='md:pr-20 flex flex-col justify-center'
               >
                   <h1 
                      className='font-Gloock text-offWhite text-5xl md:text-8xl mb-10'
                      style={{
                          transform: isInView ? "none" : "translateY(100px)",
                          opacity: isInView ? 1 : 0,
                          transition: "all 1s"
                        }}
                      >
                       Thank You for reaching out!!
                   </h1>

                   <p 
                      className='text-xl tracking-wider text-neutral-400'
                      style={{
                          transform: isInView ? "none" : "translateY(100px)",
                          opacity: isInView ? 1 : 0,
                          transition: "all 1.5s"
                        }}
                      >
                      Your message has been sent to my email, and I will be answering shortly. Thank you for your time, and I hope my website was an enjoyable experience for you.
                   </p>
                  
                  <div
                      style={{
                          opacity: isInView ? 1 : 0,
                          transition: "all 1.5s",
                          transitionDelay: "1.5s"
                      }}
                      >
                      <div className='
                                    w-full md:w-1/2 font-Montserrat bg-dark2 text-md
                                    rounded-lg text-center py-3 my-10
                                    hover:bg-neutral-300 hover:text-dark transition-all'>
                        <Link to='/'>
                              Back To My Website
                        </Link>
                      </div>

                  </div>


              </div>
              



              {/* SVG Goes here */}

              <div
                id='svg'
                className='md:w-1/3 flex items-center justify-center'
                >
                  <svg viewBox="0 0 841 705" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[20rem] md:w-[30rem]'>
                  <g id="Frame 1">
                  <g id="undraw_message_sent_re_q2kl 1" clip-path="url(#clip0_3_2)">
                  <g id="leaves">
                  <path id="Vector" d="M100.561 258.258L68.0234 239.931C67.5845 220.324 71.9386 200.905 80.7076 183.362C88.2094 217.411 127.689 233.61 145.904 263.339C151.514 272.655 154.956 283.114 155.975 293.94C156.993 304.767 155.563 315.684 151.788 325.883L153.928 352.282C137.112 347.245 121.587 338.622 108.423 327.008C95.2598 315.393 84.7709 301.063 77.679 285.004C73.7898 275.956 71.0554 266.454 69.5406 256.722C84.7112 258.337 100.561 258.258 100.561 258.258Z" fill="#F2F2F2"/>
                  <path id="Vector_2" d="M685.487 591.67L686.485 569.236C696.886 563.676 708.487 560.74 720.28 560.681C704.049 573.951 706.077 599.532 695.073 617.378C691.598 622.917 686.921 627.604 681.389 631.09C675.856 634.577 669.61 636.773 663.114 637.518L649.531 645.834C647.667 635.444 648.078 624.773 650.735 614.556C653.392 604.34 658.233 594.821 664.923 586.655C668.722 582.112 673.078 578.065 677.888 574.609C681.141 583.187 685.487 591.67 685.487 591.67Z" fill="#F2F2F2"/>
                  </g>
                  <path id="Vector_3" d="M650.489 634.289L638.189 634.288L632.338 586.848L650.491 586.849L650.489 634.289Z" fill="#FFB6B6"/>
                  <path id="Vector_4" d="M653.625 646.211L613.967 646.21V645.708C613.968 641.614 615.594 637.688 618.489 634.794C621.384 631.899 625.31 630.273 629.403 630.272L636.648 624.777L650.164 630.273L653.626 630.273L653.625 646.211Z" fill="#2F2E41"/>
                  <path id="Vector_5" d="M593.348 634.289L581.049 634.288L575.198 586.848L593.351 586.849L593.348 634.289Z" fill="#FFB6B6"/>
                  <path id="Vector_6" d="M596.485 646.211L556.827 646.21V645.708C556.827 641.614 558.454 637.688 561.348 634.794C564.243 631.899 568.169 630.273 572.263 630.272L579.508 624.777L593.024 630.273L596.486 630.273L596.485 646.211Z" fill="#2F2E41"/>
                  <path id="Vector_7" d="M588.025 374.93L668.025 376.93C683.218 385.183 683.449 403.044 678.471 424.25C678.471 424.25 680.151 436.855 676.79 440.216C673.429 443.577 671.748 443.577 673.429 449.459C675.11 455.341 666.23 464.949 667.309 466.027C668.387 467.106 670.908 472.988 670.908 472.988L662.505 520.885C662.505 520.885 656.623 604.074 654.942 605.755C653.262 607.435 651.581 605.755 653.262 609.956C654.942 614.158 656.623 612.477 654.942 614.158C653.454 615.763 652.051 617.446 650.741 619.2H630.425C630.425 619.2 628.893 610.797 628.893 609.956C628.893 609.116 627.213 604.074 627.213 603.234C627.213 602.394 628.698 600.908 628.698 600.908C629.211 599.2 629.558 597.446 629.733 595.671C629.733 593.991 634.775 529.288 634.775 529.288L624.692 445.258L600.323 527.607C600.323 527.607 600.323 599.873 598.642 601.553C596.962 603.234 596.962 602.394 597.802 605.755C598.642 609.116 602.004 608.276 599.483 610.797C596.962 613.317 596.122 609.116 596.962 613.318L597.802 617.519L572.593 617.88C572.593 617.88 569.232 610.797 570.913 608.276C572.593 605.755 572.492 606.443 570.442 602.318C568.392 598.192 567.551 597.352 568.392 596.512C569.232 595.671 569.232 591.202 569.232 591.202L573.433 510.801C573.433 510.801 574.274 425.931 574.274 423.41C574.337 422.113 574.098 420.819 573.576 419.63V416.208L576.795 404.083L588.025 374.93Z" fill="#2F2E41"/>
                  <path id="Vector_8" d="M623.654 225.011C618.299 228.195 615.095 234.044 613.256 239.996C609.852 251.016 607.803 262.41 607.154 273.925L605.212 308.401L581.157 381.808C602.004 399.448 680.366 385.817 680.366 385.817C680.366 385.817 682.772 385.016 680.366 382.61C677.961 380.205 675.619 382.336 678.025 379.93C680.43 377.525 678.772 380.205 677.97 377.799C677.168 375.394 677.97 376.997 678.772 376.195C679.574 375.394 672.565 368.177 672.565 368.177L678.979 326.041L686.997 241.048C677.375 229.02 658.025 221.93 658.025 221.93L653.025 212.93L628.025 214.93L623.654 225.011Z" fill="#E6E6E6"/>
                  <g id="head">
                  <path id="Vector_9" d="M636.082 208.583C649.81 208.583 660.938 197.454 660.938 183.726C660.938 169.999 649.81 158.87 636.082 158.87C622.354 158.87 611.225 169.999 611.225 183.726C611.225 197.454 622.354 208.583 636.082 208.583Z" fill="#FFB6B6"/>
                  <path id="Vector_10" d="M620.244 169.139C621.206 169.146 622.163 169.272 623.094 169.513C624.93 169.954 626.794 170.267 628.674 170.448C634.428 170.99 639.835 173.444 644.031 177.418C648.227 181.393 650.97 186.659 651.821 192.376C653.266 191.117 656.552 188.8 659.246 190.953C659.287 190.987 659.311 191.005 659.406 190.96C661.195 190.111 664.371 179.665 664.467 170.467C664.518 165.585 663.749 159.352 659.801 157.377L659.593 157.273L659.538 157.047C659.275 155.949 656.327 154.075 651.205 152.616C641.897 149.964 628.021 144.799 620.208 152.4C619.616 154.963 617.693 160.447 615.749 161.068C613.597 161.756 611.739 162.35 611.446 164.99C611.201 168.746 611.219 172.515 611.499 176.269C612.228 173.972 613.66 171.961 615.591 170.52C616.965 169.596 618.589 169.114 620.244 169.139Z" fill="#2F2E41"/>
                  </g>
                  <path id="Vector_11" d="M573.979 306.481L614.582 280.478L594.132 253.293L573.938 278.133L511.02 281.992C509.365 280.356 507.269 279.237 504.99 278.771C502.71 278.305 500.344 278.513 498.18 279.369C496.016 280.225 494.148 281.691 492.803 283.591C491.458 285.49 490.695 287.739 490.607 290.064C490.519 292.39 491.109 294.69 492.306 296.686C493.502 298.682 495.254 300.286 497.347 301.304C499.439 302.321 501.783 302.708 504.091 302.416C506.4 302.125 508.574 301.168 510.348 299.662L573.979 306.481Z" fill="#FFB6B6"/>
                  <path id="Vector_12" d="M652.268 244.183C654.624 258.444 610.122 285.678 610.122 285.678C610.121 282.33 583.56 307.601 582.361 304.825C578.954 296.935 576.558 278.246 571.797 275.255C569.074 273.544 588.196 257.474 588.196 257.474C588.196 257.474 598.206 247.39 611.341 234.671C614.988 231.006 619.503 228.324 624.465 226.873C629.428 225.423 634.677 225.251 639.723 226.375C639.723 226.375 649.911 229.921 652.268 244.183Z" fill="#E6E6E6"/>
                  <path id="Vector_13" d="M735.957 313.307L709.1 273.264L682.354 294.285L707.616 313.948L712.806 376.771C711.206 378.46 710.131 380.579 709.714 382.868C709.297 385.157 709.554 387.518 710.456 389.664C711.357 391.809 712.863 393.646 714.79 394.95C716.718 396.254 718.983 396.969 721.309 397.008C723.636 397.047 725.924 396.408 727.894 395.17C729.863 393.931 731.43 392.146 732.403 390.032C733.376 387.918 733.713 385.567 733.373 383.265C733.033 380.963 732.03 378.81 730.487 377.068L735.957 313.307Z" fill="#FFB6B6"/>
                  <path id="Vector_14" d="M672.015 236.355C686.223 233.697 714.393 277.613 714.393 277.613C711.046 277.684 736.874 303.704 734.124 304.962C726.307 308.536 707.674 311.327 704.784 316.15C703.131 318.909 686.66 300.131 686.66 300.131C686.66 300.131 676.366 290.337 663.372 277.474C659.631 273.906 656.853 269.449 655.298 264.518C653.743 259.587 653.46 254.343 654.477 249.274C654.477 249.274 657.806 239.013 672.015 236.355Z" fill="#E6E6E6"/>
                  <path id="Vector_15" d="M742.818 646.409C742.819 646.565 742.788 646.72 742.729 646.865C742.669 647.009 742.581 647.141 742.471 647.251C742.36 647.362 742.229 647.449 742.084 647.509C741.94 647.569 741.785 647.599 741.628 647.599H461.338C461.023 647.599 460.72 647.473 460.497 647.25C460.274 647.027 460.148 646.724 460.148 646.409C460.148 646.093 460.274 645.79 460.497 645.567C460.72 645.344 461.023 645.219 461.338 645.219H741.628C741.785 645.218 741.94 645.249 742.084 645.308C742.229 645.368 742.36 645.456 742.471 645.566C742.581 645.677 742.669 645.808 742.729 645.953C742.788 646.097 742.819 646.252 742.818 646.409Z" fill="#CCCCCC"/>
                  <path id="Vector_16" d="M483.162 285.792H142.992C137.677 285.798 132.582 287.912 128.824 291.67C125.066 295.428 122.952 300.523 122.946 305.838V517.626C122.952 522.941 125.066 528.036 128.824 531.794C132.582 535.552 137.677 537.666 142.992 537.672H483.162C488.476 537.666 493.572 535.552 497.33 531.794C501.088 528.036 503.202 522.941 503.208 517.626V305.838C503.202 300.523 501.088 295.428 497.33 291.67C493.572 287.912 488.476 285.798 483.162 285.792Z" fill="#FDBA74"/>
                  <path id="Vector_17" d="M483.162 285.792H142.992C137.677 285.798 132.582 287.912 128.824 291.67C125.066 295.428 122.952 300.523 122.946 305.838V517.626C122.952 522.941 125.066 528.036 128.824 531.794C132.582 535.552 137.677 537.666 142.992 537.672H483.162C488.476 537.666 493.572 535.552 497.33 531.794C501.088 528.036 503.202 522.941 503.208 517.626V305.838C503.202 300.523 501.088 295.428 497.33 291.67C493.572 287.912 488.476 285.798 483.162 285.792ZM489.74 437.922C489.659 459.483 481.13 480.154 465.984 495.5C450.838 510.845 430.28 519.643 408.722 520.006C374.205 520.455 427.819 520.63 386.19 520.63C290.997 520.63 191.738 519.721 154.703 519.131C149.83 519.031 145.19 517.029 141.773 513.554C138.356 510.079 136.432 505.406 136.413 500.532V305.854C136.415 304.108 137.108 302.435 138.341 301.199C139.573 299.964 141.245 299.267 142.99 299.26H483.148C484.893 299.262 486.566 299.955 487.801 301.188C489.037 302.42 489.734 304.091 489.74 305.836V437.922Z" fill="#3F3D56"/>
                  <path id="Vector_18" d="M441.287 163.838H182.114C179.82 163.841 177.584 164.552 175.71 165.874C173.836 167.195 172.416 169.063 171.643 171.222L131.615 283.521C131.018 285.198 130.831 286.993 131.072 288.756C131.312 290.519 131.972 292.199 132.997 293.654C134.021 295.109 135.38 296.296 136.959 297.117C138.538 297.938 140.291 298.368 142.07 298.37L489.665 298.987H489.68C491.52 298.987 493.331 298.53 494.95 297.658C496.57 296.786 497.948 295.526 498.961 293.99C499.973 292.454 500.589 290.691 500.752 288.859C500.916 287.027 500.622 285.183 499.898 283.492L451.505 170.575C450.649 168.575 449.225 166.869 447.408 165.672C445.592 164.474 443.463 163.836 441.287 163.838Z" fill="#3F3D56"/>
                  <path id="Vector_19" d="M500.798 285.931C500.797 287.436 500.49 288.926 499.898 290.311L451.508 377.23C450.646 379.227 449.22 380.927 447.404 382.123C445.588 383.319 443.462 383.958 441.288 383.961H182.118C179.824 383.958 177.586 383.248 175.711 381.928C173.835 380.607 172.413 378.74 171.638 376.581L131.618 290.281C131.127 288.906 130.912 287.448 130.986 285.99C131.059 284.532 131.419 283.102 132.045 281.784C132.671 280.465 133.55 279.282 134.634 278.304C135.717 277.325 136.982 276.57 138.358 276.081C139.547 275.651 140.803 275.431 142.068 275.431L184.528 275.351L201.858 275.321L429.898 274.921L447.238 274.891L489.668 274.811H489.678C492.627 274.811 495.455 275.983 497.54 278.068C499.625 280.153 500.797 282.981 500.798 285.931Z" fill="#3F3D56"/>
                  <path id="Vector_20" d="M168.494 444.658C173.633 444.658 244.208 448.971 244.208 454.11C244.208 459.25 173.633 463.269 168.494 463.269C166.026 463.269 163.659 462.289 161.914 460.543C160.168 458.798 159.188 456.431 159.188 453.963C159.188 451.495 160.168 449.128 161.914 447.383C163.659 445.638 166.026 444.658 168.494 444.658Z" fill="#3F3D56"/>
                  <path id="Vector_21" d="M425.148 95.5205H206.618C200.761 95.5273 195.146 97.8568 191.005 101.998C186.864 106.139 184.534 111.754 184.528 117.611V383.961H441.288C443.396 383.967 445.462 383.367 447.238 382.231V117.611C447.231 111.754 444.901 106.139 440.76 101.998C436.619 97.8568 431.004 95.5273 425.148 95.5205Z" fill="#E6E6E6"/>
                  <path id="Vector_22" d="M341.738 113.431H221.978C216.645 113.436 211.532 115.556 207.76 119.326C203.988 123.096 201.865 128.208 201.858 133.541V383.961H429.898V201.591C429.871 178.217 420.574 155.809 404.046 139.282C387.519 122.754 365.111 113.457 341.738 113.431Z" fill="white"/>
                  <path id="Vector_23" d="M391.048 361.721H240.708C239.408 361.721 238.162 362.237 237.243 363.156C236.324 364.075 235.808 365.321 235.808 366.621C235.808 367.92 236.324 369.166 237.243 370.085C238.162 371.004 239.408 371.521 240.708 371.521H391.048C392.347 371.521 393.594 371.004 394.512 370.085C395.431 369.166 395.948 367.92 395.948 366.621C395.948 365.321 395.431 364.075 394.512 363.156C393.594 362.237 392.347 361.721 391.048 361.721Z" fill="#E4E4E4"/>
                  <path id="Vector_24" d="M391.048 342.341H240.708C239.407 342.341 238.159 342.857 237.239 343.777C236.319 344.697 235.803 345.945 235.803 347.246C235.803 348.546 236.319 349.794 237.239 350.714C238.159 351.634 239.407 352.151 240.708 352.151H391.048C392.349 352.151 393.596 351.634 394.516 350.714C395.436 349.794 395.953 348.546 395.953 347.246C395.953 345.945 395.436 344.697 394.516 343.777C393.596 342.857 392.349 342.341 391.048 342.341Z" fill="#E4E4E4"/>
                  <path id="Vector_25" d="M305.878 322.971H240.708C239.408 322.971 238.162 323.487 237.243 324.406C236.324 325.325 235.808 326.571 235.808 327.871C235.808 329.17 236.324 330.416 237.243 331.335C238.162 332.254 239.408 332.771 240.708 332.771H305.878C307.177 332.771 308.424 332.254 309.342 331.335C310.261 330.416 310.778 329.17 310.778 327.871C310.778 326.571 310.261 325.325 309.342 324.406C308.424 323.487 307.177 322.971 305.878 322.971Z" fill="#E4E4E4"/>
                  <path id="Vector_26" d="M391.048 282.391H240.708C239.407 282.391 238.159 282.907 237.239 283.827C236.319 284.747 235.803 285.995 235.803 287.296C235.803 288.596 236.319 289.844 237.239 290.764C238.159 291.684 239.407 292.201 240.708 292.201H391.048C392.349 292.201 393.596 291.684 394.516 290.764C395.436 289.844 395.953 288.596 395.953 287.296C395.953 285.995 395.436 284.747 394.516 283.827C393.596 282.907 392.349 282.391 391.048 282.391Z" fill="#E4E4E4"/>
                  <path id="Vector_27" d="M391.048 263.021H240.708C239.408 263.021 238.162 263.537 237.243 264.456C236.324 265.375 235.808 266.621 235.808 267.921C235.808 269.22 236.324 270.466 237.243 271.385C238.162 272.304 239.408 272.821 240.708 272.821H391.048C392.347 272.821 393.594 272.304 394.512 271.385C395.431 270.466 395.948 269.22 395.948 267.921C395.948 266.621 395.431 265.375 394.512 264.456C393.594 263.537 392.347 263.021 391.048 263.021Z" fill="#E4E4E4"/>
                  <path id="Vector_28" d="M305.878 243.641H240.708C239.407 243.641 238.159 244.157 237.239 245.077C236.319 245.997 235.803 247.245 235.803 248.546C235.803 249.846 236.319 251.094 237.239 252.014C238.159 252.934 239.407 253.451 240.708 253.451H305.878C307.178 253.451 308.426 252.934 309.346 252.014C310.266 251.094 310.783 249.846 310.783 248.546C310.783 247.245 310.266 245.997 309.346 245.077C308.426 244.157 307.178 243.641 305.878 243.641Z" fill="#E4E4E4"/>
                  <path id="Vector_29" d="M391.048 203.061H240.708C239.407 203.061 238.159 203.577 237.239 204.497C236.319 205.417 235.803 206.665 235.803 207.966C235.803 209.266 236.319 210.514 237.239 211.434C238.159 212.354 239.407 212.871 240.708 212.871H391.048C392.349 212.871 393.596 212.354 394.516 211.434C395.436 210.514 395.953 209.266 395.953 207.966C395.953 206.665 395.436 205.417 394.516 204.497C393.596 203.577 392.349 203.061 391.048 203.061Z" fill="#FDBA74"/>
                  <path id="Vector_30" d="M391.048 183.691H240.708C239.407 183.691 238.159 184.207 237.239 185.127C236.319 186.047 235.803 187.295 235.803 188.596C235.803 189.896 236.319 191.144 237.239 192.064C238.159 192.984 239.407 193.501 240.708 193.501H391.048C392.349 193.501 393.596 192.984 394.516 192.064C395.436 191.144 395.953 189.896 395.953 188.596C395.953 187.295 395.436 186.047 394.516 185.127C393.596 184.207 392.349 183.691 391.048 183.691Z" fill="#FDBA74"/>
                  <path id="Vector_31" d="M305.878 164.311H240.708C239.407 164.311 238.159 164.827 237.239 165.747C236.319 166.667 235.803 167.915 235.803 169.216C235.803 170.516 236.319 171.764 237.239 172.684C238.159 173.604 239.407 174.121 240.708 174.121H305.878C307.178 174.121 308.426 173.604 309.346 172.684C310.266 171.764 310.783 170.516 310.783 169.216C310.783 167.915 310.266 166.667 309.346 165.747C308.426 164.827 307.178 164.311 305.878 164.311Z" fill="#FDBA74"/>
                  <g id="check">
                  <path id="Vector_32" d="M439.045 133.326C460.122 133.326 477.208 116.24 477.208 95.1628C477.208 74.0861 460.122 57 439.045 57C417.968 57 400.882 74.0861 400.882 95.1628C400.882 116.24 417.968 133.326 439.045 133.326Z" fill="#FDBA74"/>
                  <path id="Vector_33" d="M433.839 115.025C433.18 115.025 432.53 114.871 431.94 114.577C431.351 114.282 430.838 113.854 430.443 113.326L420.031 99.4443C419.695 98.9985 419.45 98.4907 419.31 97.95C419.171 97.4093 419.139 96.8463 419.217 96.2934C419.296 95.7405 419.482 95.2084 419.766 94.7277C420.051 94.247 420.427 93.8271 420.874 93.492C421.32 93.157 421.829 92.9134 422.37 92.7752C422.911 92.637 423.474 92.6069 424.027 92.6866C424.58 92.7664 425.111 92.9544 425.591 93.2399C426.071 93.5254 426.49 93.9029 426.824 94.3505L433.635 103.432L451.13 77.1905C451.754 76.2537 452.725 75.6034 453.829 75.3826C454.933 75.1618 456.08 75.3886 457.017 76.0131C457.953 76.6377 458.604 77.6088 458.824 78.7128C459.045 79.8168 458.818 80.9633 458.194 81.9001L437.371 113.134C436.994 113.699 436.488 114.166 435.894 114.494C435.3 114.823 434.635 115.004 433.957 115.023C433.917 115.024 433.878 115.025 433.839 115.025Z" fill="white"/>
                  </g>
                  </g>
                  </g>
                  <defs>
                  <clipPath id="clip0_3_2">
                  <rect width="674.818" height="590.599" fill="white" transform="translate(68 57)"/>
                  </clipPath>
                  </defs>
                  </svg>

              </div>

            </div>
      </div>

  );
}