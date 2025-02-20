import {DollarSign, Users, ShoppingBag, Eye} from "lucide-react"
 
 //revenue data (areachart)
 export const revenueData =  [
        { month: "Jan", revenue: 4000, target: 3800 },
        { month: "Feb", revenue: 3000, target: 3200 },
        { month: "Mar", revenue: 5000, target: 4500 },
        { month: "Apr", revenue: 4500, target: 4200 },
        { month: "May", revenue: 6000, target: 5500 },
        { month: "Jun", revenue: 5500, target: 5800 },
        { month: "Jul", revenue: 7000, target: 6500 },
    ]

//channel data(pie chart)
export const channelData = [
        { name: "Organic Search", value: 4000 },
        { name: "Paid Search", value: 3000 },
        { name: "Direct", value: 2000 },
        { name: "Social Media", value: 2780 },
        { name: "Referral", value: 1890 },
        { name: "Email", value: 2390 },
    ]

//channel data colors(pie chart)
export const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F"]

//prodcut performance chart (bat chart)
export const productPerformanceData = [
        { name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
        { name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
        { name: "Product C", sales: 2000, revenue: 9800, profit: 2290 },
        { name: "Product D", sales: 2780, revenue: 3908, profit: 2000 },
        { name: "Product E", sales: 1890, revenue: 4800, profit: 2181 },
    ]

//stats card data
export const overviewData =  [
    { name: "Revenue", value: "$1,234,567", change: 12.5, icon: DollarSign },
    { name: "Users", value: "45,678", change: 8.3, icon: Users },
    { name: "Orders", value: "9,876", change: -3.2, icon: ShoppingBag },
    { name: "Page Views", value: "1,234,567", change: 15.7, icon: Eye },
]

