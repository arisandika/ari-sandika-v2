import { useRouter } from "next/router";
import Link from "next/link";

export const CustomCanvasLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`canvas-link group ${
        router.asPath === href ? "text-light" : ``
      }`}
      onClick={handleClick}
    >
      <span
        className={`canvas-link-path select-none group-hover:h-[6px] group-hover:w-[20px] ${
          router.asPath === href ? "link-path-on" : "link-path-off"
        }`}
      >
        &nbsp;
      </span>
      {title}
    </button>
  );
};

export const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  
  return (
    <Link href={href} className={`nav-link group nav-link-dark`}>
      {title}
      <span
        className={`nav-link-path group-hover:h-[4px] group-hover:w-[4px] select-none nav-path-bg-dark ${
          router.asPath === href ? "nav-path-on" : "nav-path-off"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
