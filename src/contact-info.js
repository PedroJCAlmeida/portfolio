import ImgLinkedin from "./assets/social/linkedin.svg" 
import ImgInstagram from "./assets/social/instagram.svg" 
import ImgFacebook from "./assets/social/facebook.svg" 
import ImgGitHub from "./assets/social/github.svg" 
import ImgPhone from "./assets/social/phone.svg" 
import ImgWhatsApp from "./assets/social/whatsapp.svg" 



const socialMedia = {
    contactInfo: [
        {
            name: 'LinkedIn',
            icon: ImgLinkedin,
            link: 'https://www.linkedin.com/in/pedro-j-c-almeida',
        },
        {
            name: 'Instagram',
            icon: ImgInstagram,
            link: 'https://www.instagram.com/pjcalmeida',
        },
        {
            name: 'Facebook',
            icon: ImgFacebook,
            link: 'https://www.facebook.com/pedro.almeida.7140497',
        },
        {
            name: 'GitHub',
            icon: ImgGitHub,
            link: 'https://github.com/PedroJCAlmeida'
        },        
    ],

    contactNumber:[
        {
            name: 'Phone',
            icon: ImgPhone,
            link:'+351911837861',
        },
        {
            name: 'WhatsApp',
            icon: ImgWhatsApp,
            link:'+351911837861'
        },
    ],     
};

export default socialMedia;