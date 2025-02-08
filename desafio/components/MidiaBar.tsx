import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function MidiaBar() {
    return (
        <nav className="w-full bg-orange-500 text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <div className="flex items-center space-x-2">
                    <a href="/" className="navbar-brand ml-4">
                        <img src="/logo-branco.png" alt="Logo" width="140" height="34" />
                    </a>
                </div>
                <div className="text-center text-sm">
                    <p>© Copyright 2021 Netimóveis Brasil S.A. Todos os direitos reservados.</p>
                    <p>
                        <a href="#" className="underline">Política de privacidade</a> |
                        <a href="#" className="underline"> Termos de uso</a> |
                        <a href="#" className="underline"> LGPD</a>
                    </p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-white rounded-full text-orange-500">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="p-2 bg-white rounded-full text-orange-500">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" className="p-2 bg-white rounded-full text-orange-500">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="#" className="p-2 bg-white rounded-full text-orange-500">
                        <FaYoutube size={20} />
                    </a>
                </div>
            </div>
        </nav>
    );
}
