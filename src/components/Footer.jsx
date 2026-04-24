import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import SocialMediaIcon from './SocialMediaIcon';

function Footer() {
  return (
    <div className="self-center desktop:self-end flex gap-4">
      <SocialMediaIcon icon={faFacebookF} />
      <SocialMediaIcon icon={faTwitter} />
      <SocialMediaIcon icon={faInstagram} />
    </div>
  )
}

export default Footer;