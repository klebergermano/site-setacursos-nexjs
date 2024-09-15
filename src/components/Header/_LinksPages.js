import LinkLiCursosPage from "../../_LinkLiCursosPage";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlHome } from "react-icons/sl";
import { IoChatbubblesOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation'




const LinksPages = {
    linkHome:
        `${<LinkScroll
            className="a-sem-link"
            activeClass="active"
            to="#slide_home"
            smooth={true}
            offset={-60}
            duration={800}
            onClick={() => setIsModal(!isModal)}
        >
            <SlHome className={style.icon} />
            Início
        </LinkScroll>}`,
    linkContato:
        `${<LinkScroll
            className="a-sem-link"
            activeClass="active"
            to="#slide_home"
            smooth={true}
            offset={-60}
            duration={800}
            onClick={() => setIsModal(!isModal)}
        >
            <SlHome className={style.icon} />
            Início
        </LinkScroll>}`,

}


export default LinksPages
