import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./DoctorsStyles.module.scss"
import DoctorCard from "../DoctorCard";
import 'swiper/css';
import { DoctorType } from "../../types";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useAppDispatch, useAppSelector } from "../../store";
import { setResult } from "../../redux/stepsSlice";
import { useEffect, useState } from "react";
import { get } from "../../libs/api";



function Doctors() {
    // const doctors = Array.from({ length: 10 }, (_, i) => getDoctor(i.toString()))
    const [doctors, setDoctors] = useState<DoctorType[]>([])
    const isPhone = useMediaQuery('(max-width: 768px)')
    const { result, step } = useAppSelector(state => state.steps)
    const dispatch = useAppDispatch()

    const handler = (value: DoctorType) => {
        const _result = [ ...result ]
        _result[step] = value
        dispatch(setResult(_result))
    }

    useEffect(() => {
        get('doctors')
            .then(r => setDoctors(r))
    }, [])

    return (
        <div className={styles.container}>
            <Swiper slidesPerView={isPhone ? 1 : 3} style={{ overflowY: 'visible' }}>
                {doctors.map(doctor => (
                    <SwiperSlide key={doctor.id}>
                        <DoctorCard doctor={doctor} active={doctor.id === result[step]?.id} handler={() => handler(doctor)} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Doctors;