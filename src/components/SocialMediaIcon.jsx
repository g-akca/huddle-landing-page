import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialMediaIcon({ icon }) {
  return (
    <a href="#" className="h-7 tablet:h-10 aspect-square border-white border rounded-full flex justify-center items-center">
      <FontAwesomeIcon icon={icon} className="text-[12px] tablet:text-[18px]" />
    </a>
  )
}

export default SocialMediaIcon;