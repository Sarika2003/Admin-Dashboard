import { motion } from "framer-motion";
import Header from "../components/common/Header";
import DangerZone from "../components/settings/DangerZone";
import Notifications from "../components/settings/Notifications";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";

const SettingsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'  
        >
			<Header title='Settings' />
			<motion.main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'  initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}>
				<Profile />
				<Notifications />
				<Security />
				<DangerZone />
			</motion.main>
		</div>
	);
};
export default SettingsPage;