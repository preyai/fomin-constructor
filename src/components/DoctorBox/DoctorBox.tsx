import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { DoctorType } from "../../types"
import styles from "./DoctorBoxStyles.module.scss"
import DoctorCard from "../DoctorCard";

type DoctorBoxProps = {
    variants: DoctorType[]
}

function DoctorBox({ variants }: DoctorBoxProps) {
    const isPhone = useMediaQuery('(max-width: 768px)')

    return (
        <div className={styles.container}>
            <Swiper slidesPerView={isPhone ? 1 : 3} style={{ overflowY: 'visible' }}>
                {variants.map(doctor => (
                    <SwiperSlide key={doctor.id}>
                        <DoctorCard doctor={doctor} key={doctor.id} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default DoctorBox;