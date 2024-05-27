import React from 'react'
import Header from './Header';
import Card from './Card';
import { IoIosSend } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import UserCards from './UserCards';
import FormContainer from './FormContainer';
import Chart from './Chart';

const Dashboard = () => {
    return (
        <div className='min-h-[100vh] pt-[100px] pl-[100px] bg-fixed bg-cover bg-center'
        style={{
            backgroundImage: "url(/images/banner-home.jpg)"
        }}
        >
            <div className='p-5'>
                <Header />
                <div className='grid grid-cols-3 gap-5 mt-10'>
                    <Card
                        title="Total Persons"
                        count={1600}
                        countSup={"+2.49%"}
                        color="bg-yellow-500"
                        icon={<IoIosSend className='text-2xl' />}
                        percent="30%"
                        iconColor="bg-yellow-200"
                    />
                    <Card
                        title="Total Weapons Detected"
                        count={1600}
                        countSup={"+2.49%"}
                        color="bg-yellow-500"
                        icon={<GoPeople className='text-2xl' />}
                        percent="70%"
                        iconColor="bg-yellow-200"
                    />
                    <Card
                        title="Total Persons"
                        count={1600}
                        countSup={"+2.49%"}
                        color="bg-blue-500"
                        icon={<IoStatsChart className='text-lg' />}
                        iconColor="bg-blue-200"
                    />

                </div>

                <div className='mt-5 grid grid-cols-2'>
                    <UserCards />
                    <div className='p-4'>
                        <FormContainer />
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard