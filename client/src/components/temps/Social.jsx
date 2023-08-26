import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";
export default function Social() {
  return (
    <div className='social'>
        <ul className='center'>
            <li>
                <Link><FacebookRoundedIcon /></Link>
            </li>
            <li>
                <Link><GitHubIcon /></Link>
            </li>
            <li>
                <Link><LinkedInIcon /></Link>
            </li>
            <li>
                <Link><YouTubeIcon /></Link>
            </li>
        </ul>
    </div>
  )
}
