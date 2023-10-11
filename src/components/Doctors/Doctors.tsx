import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./DoctorsStyles.module.scss"
import DoctorCard from "../DoctorCard";
import 'swiper/css';
import { DoctorType } from "../../types";
import photo from "../../assets/doctor.png";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function getDoctor(id: string): DoctorType {
    return {
        id,
        fio: "Иванов Иван Иванович",
        price: Math.floor(Math.random() * 10) * 2000,
        photo
    }
}

function Doctors() {
    const doctors = Array.from({ length: 10 }, (_, i) => getDoctor(i.toString()))
    const isPhone = useMediaQuery('(max-width: 768px)')

    return (
        <div className={styles.container}>
            <Swiper slidesPerView={isPhone ? 1 : 3} style={{ overflowY: 'visible' }}>
                {doctors.map(doctor => (
                    <SwiperSlide key={doctor.id}>
                        <DoctorCard doctor={doctor} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Doctors;