
import { PARAMS } from '../../screens/Bisnis/schema';

export const navItems = [
  {
    page: "Beranda",
    url: "/"
  },
  {
    page: "Tentang",
    url: "/tentang"
  },
  {
    page: "Bisnis",
    url: "/bisnis",
    links: [
      {
        section: "Security System",
        url: `/bisnis?section=${PARAMS.SECURITY_SYSTEM.key}`,
        param: PARAMS.SECURITY_SYSTEM.key
      },
      {
        section: "Audio Visual",
        url: `/bisnis?section=${PARAMS.AUDIO_VISUAL.key}`,
        param: PARAMS.AUDIO_VISUAL.key
      },
      {
        section: "Telecommunication",
        url: `/bisnis?section=${PARAMS.TELECOMMUNICATION.key}`,
        param: PARAMS.TELECOMMUNICATION.key
      },
      {
        section: "Air Conditioning System",
        url: `/bisnis?section=${PARAMS.AIR_CONDITIONING.key}`,
        param: PARAMS.AIR_CONDITIONING.key
      },
      {
        section: "Integrated System",
        url: `/bisnis?section=${PARAMS.INTEGRATED_SYSTEM.key}`,
        param: PARAMS.INTEGRATED_SYSTEM.key
      },
      {
        section: "Maintenance Service",
        url: `/bisnis?section=${PARAMS.MAINTENANCE.key}`,
        param: PARAMS.MAINTENANCE.key
      },
    ]
  },
  {
    page: "Kontak",
    url: "/kontak"
  },
]