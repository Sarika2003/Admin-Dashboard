import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { channelData, COLORS } from "../../data/analytics";



const ChannelPerformance = () => {
    
	return (
		<div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			
		>
			<motion.h2 className='text-xl font-semibold text-gray-100 mb-4'
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3, ease: "easeOut" }}
             >Channel Performance</motion.h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<PieChart>
						<Pie
							data={channelData}
							cx='50%'
							cy='50%'
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{channelData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};
export default ChannelPerformance;