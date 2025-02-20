import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";
import { salesData}  from '../../data/overview'



const SalesOverviewChart = () => {
	

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-7  border border-gray-700 pl-3'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
			
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Overview</h2>

			<div className='h-90'>

				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={salesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey="name"
						stroke='#9ca3af' interval={0}   />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='sales'
							stroke='#6366F1'
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default SalesOverviewChart;
