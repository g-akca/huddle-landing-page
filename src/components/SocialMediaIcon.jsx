import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialMediaIcon({ icon }) {
  return (
    <a href="#" className="h-7 aspect-square border-white border rounded-full flex justify-center items-center">
      <FontAwesomeIcon icon={icon} className="text-[12px]" />
    </a>
  )
}

export default SocialMediaIcon;