
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { Button } from "./Button";
import { TEXTTITLE } from "@/i18n/es";

function Header({ mode, onClick }: HeaderProps) {
  return (
    <header className="py-4 shadow-lg border-b-2 dark:border-darkBlue bg-darkTextLightElements dark:bg-darkHeader dark:text-slate-100">
      <nav className="w-11/12 max-w-10xl mx-auto">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="/">
              <h1 className="text-lg font-extrabold">{TEXTTITLE.title}</h1>
            </Link>
          </li>
          <li>
            <Button
              onClick={onClick}
              title={mode ? "Light Mode" : "Dark Mode"}
              classes="p-2 text-3xl flex items-center gap-2 border-none bg-transparent"
            >
              {mode ? (
                <FontAwesomeIcon
                  icon={faMoon}
                  className="text-darkTextLightElements text-xl w-6 h-6"
                />
              ) : (
                <FontAwesomeIcon
                  icon={regularMoon}
                  className="text-lightText text-xl w-6 h-6"
                />
              )}
              <span className="text-sm">
                {mode ? "Light Mode" : "Dark Mode"}
              </span>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
