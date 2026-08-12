import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import SocialMediaIcon from './SocialMediaIcon';

function Footer() {
  return (
    <footer className="self-center desktop:self-end flex gap-4">
      <SocialMediaIcon icon={faFacebookF} label="Facebook" />
      <SocialMediaIcon icon={faTwitter} label="Twitter" />
      <SocialMediaIcon icon={faInstagram} label="Instagram" />
    </footer>
  )
}

export default Footer;