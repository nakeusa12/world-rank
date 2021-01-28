import Head from "next/head";
import styles from "./Layout.module.css";
import Link from "next/link"
import { Brightness6Rounded } from "@material-ui/icons";
import { useEffect, useState } from "react";

const Layout = ({ children, title="World Ranks" }) => {
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === 'light') {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  }

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme)
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <svg
          width="182"
          height="41"
          viewBox="0 0 182 41"
          fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{cursor: 'pointer'}}
        >
          <g clipPath="url(#clip0)">
            <path
              d="M48.1992 25.6562H68.1678V40.1908"
              stroke="#66B848"
              strokeWidth="5"
            />
            <path
              d="M24.3477 18V2.5L48.754 2.52484V28"
              stroke="#5671FF"
              strokeWidth="5"
            />
            <path
              d="M1.60547 30.1283V15.5938H27"
              stroke="#FF5252"
              strokeWidth="5"
            />
            <path
              d="M12.7932 22.6601L12.5555 23.78H13.4034V24.4274H12.4206L12.1637 25.625H11.4635L11.7204 24.4274H10.4614L10.2045 25.625H9.50433L9.76127 24.4274H8.76562V23.78H9.89617L10.1338 22.6601H9.14461V22.0127H10.2687L10.5192 20.8345H11.2194L10.9689 22.0127H12.2279L12.4784 20.8345H13.1786L12.9281 22.0127H13.7824V22.6601H12.7932ZM12.093 22.6601H10.834L10.5963 23.78H11.8553L12.093 22.6601ZM14.9583 24.6216C15.3694 24.2634 15.6928 23.9699 15.9283 23.7412C16.1681 23.5081 16.3672 23.2664 16.5257 23.0161C16.6841 22.7658 16.7633 22.5155 16.7633 22.2652C16.7633 22.0062 16.7013 21.8034 16.5771 21.6566C16.4572 21.5099 16.2666 21.4365 16.0054 21.4365C15.7527 21.4365 15.5557 21.5185 15.4144 21.6825C15.2774 21.8422 15.2046 22.058 15.196 22.3299H14.4894C14.5023 21.8379 14.6479 21.4624 14.9262 21.2035C15.2089 20.9402 15.5664 20.8086 15.9989 20.8086C16.4657 20.8086 16.8297 20.9381 17.0909 21.197C17.3565 21.456 17.4892 21.8012 17.4892 22.2328C17.4892 22.5435 17.41 22.8435 17.2515 23.1326C17.0974 23.4175 16.9111 23.6743 16.6927 23.903C16.4786 24.1274 16.2045 24.3885 15.8705 24.6863L15.5814 24.9453H17.6177V25.5603H14.4958V25.023L14.9583 24.6216Z"
              fill="#FF0B0B"
            />
            <path
              d="M36.6952 8.92595L36.4377 10.1392H37.3563V10.8405H36.2916L36.0132 12.138H35.2547L35.5331 10.8405H34.1692L33.8908 12.138H33.1323L33.4106 10.8405H32.332V10.1392H33.5568L33.8143 8.92595H32.7426V8.22464H33.9604L34.2318 6.94824H34.9903L34.7189 8.22464H36.0828L36.3542 6.94824H37.1127L36.8414 8.22464H37.7669V8.92595H36.6952ZM35.9367 8.92595H34.5728L34.3153 10.1392H35.6792L35.9367 8.92595ZM38.498 7.75476V7.02539H39.9455V12.138H39.1452V7.75476H38.498Z"
              fill="#5671FF"
            />
            <path
              d="M57.9729 33.0588L57.7352 34.1787H58.5831V34.8261H57.6003L57.3434 36.0237H56.6432L56.9001 34.8261H55.6411L55.3842 36.0237H54.684L54.941 34.8261H53.9453V34.1787H55.0759L55.3135 33.0588H54.3243V32.4114H55.4484L55.6989 31.2332H56.3991L56.1486 32.4114H57.4076L57.6581 31.2332H58.3583L58.1078 32.4114H58.9621V33.0588H57.9729ZM57.2727 33.0588H56.0137L55.776 34.1787H57.035L57.2727 33.0588ZM59.7206 32.4697C59.7463 32.0683 59.8983 31.7554 60.1767 31.531C60.4593 31.3065 60.819 31.1943 61.2558 31.1943C61.5556 31.1943 61.8147 31.2483 62.0331 31.3562C62.2515 31.4641 62.4163 31.6108 62.5277 31.7964C62.639 31.982 62.6947 32.1913 62.6947 32.4243C62.6947 32.6919 62.624 32.9207 62.4827 33.1105C62.3414 33.3004 62.1723 33.4278 61.9753 33.4925V33.5184C62.2279 33.5961 62.4249 33.7385 62.5662 33.9457C62.7075 34.1485 62.7782 34.4096 62.7782 34.729C62.7782 34.9836 62.7204 35.2102 62.6048 35.4087C62.4891 35.6072 62.3179 35.7648 62.0909 35.8813C61.8639 35.9935 61.592 36.0496 61.2751 36.0496C60.8126 36.0496 60.4315 35.9309 60.1317 35.6935C59.8362 35.4519 59.6778 35.1066 59.6564 34.6578H60.363C60.3801 34.8865 60.4679 35.0742 60.6263 35.221C60.7848 35.3634 60.9989 35.4346 61.2687 35.4346C61.5299 35.4346 61.7312 35.3634 61.8725 35.221C62.0138 35.0742 62.0845 34.8865 62.0845 34.6578C62.0845 34.3557 61.9881 34.142 61.7954 34.0169C61.607 33.8874 61.3158 33.8227 60.9218 33.8227H60.7548V33.2141H60.9282C61.2751 33.2098 61.5385 33.1515 61.7183 33.0393C61.9025 32.9271 61.9945 32.7502 61.9945 32.5085C61.9945 32.3013 61.9282 32.1373 61.7954 32.0165C61.6627 31.8913 61.4742 31.8288 61.2301 31.8288C60.9903 31.8288 60.804 31.8913 60.6713 32.0165C60.5385 32.1373 60.4593 32.2884 60.4336 32.4697H59.7206Z"
              fill="#66B848"
            />
            <path
              d="M111.046 11.383L105.827 30.2106H101.411L97.9043 16.8047L94.2376 30.2106L89.8482 30.2376L84.8164 11.383H88.8311L92.1232 26.0028L95.9238 11.383H100.099L103.686 25.9218L107.004 11.383H111.046ZM122.164 30.3995C120.416 30.3995 118.81 29.9858 117.346 29.1587C115.883 28.3315 114.723 27.1896 113.867 25.733C113.01 24.2585 112.582 22.5951 112.582 20.7429C112.582 18.9087 113.01 17.2633 113.867 15.8067C114.723 14.3322 115.883 13.1812 117.346 12.3541C118.81 11.5269 120.416 11.1133 122.164 11.1133C123.93 11.1133 125.536 11.5269 126.982 12.3541C128.445 13.1812 129.596 14.3322 130.434 15.8067C131.291 17.2633 131.719 18.9087 131.719 20.7429C131.719 22.5951 131.291 24.2585 130.434 25.733C129.596 27.1896 128.445 28.3315 126.982 29.1587C125.519 29.9858 123.913 30.3995 122.164 30.3995ZM122.164 27.0278C123.288 27.0278 124.278 26.776 125.135 26.2725C125.991 25.751 126.66 25.0137 127.142 24.0606C127.624 23.1076 127.865 22.0016 127.865 20.7429C127.865 19.4841 127.624 18.3872 127.142 17.4521C126.66 16.499 125.991 15.7707 125.135 15.2672C124.278 14.7637 123.288 14.512 122.164 14.512C121.04 14.512 120.041 14.7637 119.166 15.2672C118.31 15.7707 117.641 16.499 117.159 17.4521C116.677 18.3872 116.436 19.4841 116.436 20.7429C116.436 22.0016 116.677 23.1076 117.159 24.0606C117.641 25.0137 118.31 25.751 119.166 26.2725C120.041 26.776 121.04 27.0278 122.164 27.0278ZM144.142 30.2106L140.02 22.8738H138.254V30.2106H134.507V11.383H141.519C142.964 11.383 144.196 11.6437 145.213 12.1653C146.23 12.6687 146.988 13.3611 147.488 14.2422C148.005 15.1054 148.264 16.0764 148.264 17.1554C148.264 18.3962 147.907 19.5201 147.193 20.5271C146.48 21.5161 145.418 22.1995 144.008 22.5771L148.478 30.2106H144.142ZM138.254 20.0416H141.385C142.402 20.0416 143.161 19.7988 143.66 19.3133C144.16 18.8098 144.41 18.1174 144.41 17.2363C144.41 16.3731 144.16 15.7078 143.66 15.2403C143.161 14.7547 142.402 14.512 141.385 14.512H138.254V20.0416ZM155.4 27.2166H161.556V30.2106H151.653V11.383H155.4V27.2166ZM170.468 11.383C172.431 11.383 174.153 11.7697 175.634 12.5429C177.133 13.3161 178.284 14.422 179.087 15.8606C179.907 17.2812 180.318 18.9356 180.318 20.8238C180.318 22.712 179.907 24.3664 179.087 25.787C178.284 27.1896 177.133 28.2776 175.634 29.0508C174.153 29.824 172.431 30.2106 170.468 30.2106H163.938V11.383H170.468ZM170.334 27.0008C172.297 27.0008 173.814 26.4613 174.884 25.3824C175.955 24.3034 176.49 22.7839 176.49 20.8238C176.49 18.8637 175.955 17.3352 174.884 16.2383C173.814 15.1234 172.297 14.5659 170.334 14.5659H167.685V27.0008H170.334Z"
              fill="url(#paint0_linear)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="84.2276"
              y1="21.4675"
              x2="181.651"
              y2="21.4675"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5252" />
              <stop offset="0.557292" stopColor="#5671FF" />
              <stop offset="1" stopColor="#66B848" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width="182" height="41" fill="white" />
            </clipPath>
          </defs>
        </svg>
        </Link>

        <button className={styles.themeSwitcher} onClick={switchTheme}>
          <Brightness6Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Nakeusa @ World-Ranks
      </footer>
    </div>
  );
};

export default Layout;
