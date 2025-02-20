import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { dailySalesData } from "../../data/sales";


const DailySalesTrend = () => {
	
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, ease: "easeOut" }} 
			
		>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Daily Sales Trend</h2>

				
			</div>

			<div className='w-full h-80'>
				<ResponsiveContainer>
					<AreaChart data={dailySalesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Area type='monotone' dataKey='sales' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default DailySalesTrend;