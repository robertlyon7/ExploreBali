"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MapPin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import InteractiveMap from "@/components/interactive-map"
import { useState } from "react"

const destinationsData = {
  "pantai-pandawa": {
    name: "Pantai Pandawa",
    location: "Kutuh, South Kuta District, Badung Regency",
    coordinates: { lat: -8.8488, lng: 115.1844 },
    heroImage: "/images/pantai-pandawa.jpg",
    description: [
      "Pandawa Beach may still sound unfamiliar and not-so-famous for today. But this beach has a million charms that have not been exposed and much appreciated by limestone cliffs on the right and left. Located in the District of South Kuta, Badung Regency, it is located approximately 3 km from the tourist area of Nusa Dua and Uluwatu Temple.",
      "Originally, Pandawa Beach is known as the Secret Beach, because it is hidden behind a row of rocky hills which is just overgrown by bushes. But now access to get there is easier to follow by motor vehicles. Road access are intentionally made by splitting towering limestone hills creating the way to the beach being very exotic. By the beaches, the limestone cliffs are perforated and engraved with beautiful sculpture characters as the place of the Five Pandawa in the Mahabharata story.",
      "The Panorama of the beach is so beautiful and charming. With clean white sand with a bluish-green ocean waters, this beach is very suitable for sunbathing or swimming as the waves break in the middle of the sea. It is located to the east, make us possible to enjoy such a beautiful sunrise of the beach. The other charm of Pandawa Beach is the activity of seaweed farmers along the coast. In addition, we can see the activity of paragliding and motor boat up the hill. Because the beach is located in line with Gunung Payung beach, Kutuh Village, so we can enjoy a beautiful view of the waterfall of Gunung Payung Beach that splits to the beach.",
    ],
    gallery: [
      "/images/pantai-pandawa.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "tanah-lot": {
    name: "Tanah Lot",
    location: "Beraban, Kediri, Tabanan Regency",
    coordinates: { lat: -8.6211, lng: 115.0868 },
    heroImage: "/images/tanah-lot.jpg",
    description: [
      "Tanah Lot is one of Bali's most important landmarks, famed for its unique offshore setting and sunset backdrops. An ancient Hindu shrine perches on top of an outcropping of rock which has been shaped continuously over the years by the ocean tide.",
      "Tanah Lot is claimed to be the work of the 15th-century Dang Hyang Nirartha. The priest is said to have spent a night on the rock and spoke to the local fishermen about the spirits of the sea. Tanah Lot is part of a chain of rock temples along the south-western coast.",
      "At the base of the rocky island, venomous sea snakes are believed to guard the temple from evil spirits and intruders. The temple is purified and blessed every 210 days in a ceremony called Piodalan.",
    ],
    gallery: [
      "/images/tanah-lot.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  bedugul: {
    name: "Bedugul",
    location: "Baturiti, Candikuning, Tabanan Regency",
    coordinates: { lat: -8.2755, lng: 115.1669 },
    heroImage: "/images/bedugul.jpg",
    description: [
      "Bedugul is a mountain resort area in Bali, Indonesia, located in the central highlands about 1,500 meters above sea level. The area is known for its cool climate, beautiful lakes, and the iconic Ulun Danu Beratan Temple.",
      "The region is famous for Lake Beratan, one of Bali's most photographed locations. The lake is surrounded by mountains and is home to the floating temple of Ulun Danu Beratan, which appears to float on the water during high tide.",
      "Bedugul is also known for its botanical gardens, strawberry farms, and traditional markets. The cool mountain air provides a refreshing escape from the tropical heat of the coastal areas.",
    ],
    gallery: [
      "/images/bedugul.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "tukad-cepung-waterfall": {
    name: "Tukad Cepung Waterfall",
    location: "Tembuku, Bangli Regency",
    coordinates: { lat: -8.4394, lng: 115.4267 },
    heroImage: "/images/tukad-cepung.jpg",
    description: [
      "Tukad Cepung Waterfall is one of Bali's most unique and Instagram-worthy waterfalls. Hidden inside a cave-like canyon, this waterfall creates magical light beams when the sun shines through the opening above.",
      "The waterfall is accessed through a short but adventurous trek through rice fields and down into a rocky canyon. The journey takes about 15-20 minutes and involves some scrambling over rocks and through shallow water.",
      "What makes Tukad Cepung special is the way sunlight filters through the canyon opening, creating ethereal light rays that illuminate the falling water. The best time to visit is between 10 AM and 12 PM when the sun is positioned perfectly to create this magical effect.",
    ],
    gallery: [
      "/images/tukad-cepung.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "lembongan-island": {
    name: "Lembongan Island",
    location: "Klungkung Regency",
    coordinates: { lat: -8.6833, lng: 115.45 },
    heroImage: "/images/lembongan-island.jpg",
    description: [
      "Nusa Lembongan is a small island southeast of Bali, part of the Nusa Penida district. Known for its crystal-clear waters, white sandy beaches, and laid-back atmosphere, it's a perfect escape from the busier mainland.",
      "The island is famous for its seaweed farming, which you can observe in the shallow waters around the coast. Popular activities include snorkeling, diving, surfing, and exploring the mangrove forests.",
      "Key attractions include Dream Beach, Devil's Tear, and the Yellow Bridge connecting to Nusa Ceningan. The island can be reached by speedboat from Sanur Beach in about 30 minutes.",
    ],
    gallery: [
      "/images/lembongan-island.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "bunut-bolong": {
    name: "Bunut Bolong",
    location: "Manggisari, Pekutatan, Jembrana Regency",
    coordinates: { lat: -8.3167, lng: 114.8833 },
    heroImage: "/images/bunut-bolong.jpg",
    description: [
      "Bunut Bolong is a unique natural attraction featuring a giant banyan tree with a natural tunnel through its trunk. The name 'Bolong' means 'hole' in Balinese, referring to the natural opening in the tree.",
      "This ancient tree is estimated to be over 300 years old and has grown to create a natural archway large enough for cars to pass through. The tree is considered sacred by locals and is often used for traditional ceremonies.",
      "The site offers a peaceful atmosphere surrounded by lush tropical vegetation. It's a popular stop for travelers heading to or from West Bali National Park and provides excellent photo opportunities.",
    ],
    gallery: [
      "/images/bunut-bolong.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "pantai-soka": {
    name: "Pantai Soka",
    location: "Soka, Tabanan Regency",
    coordinates: { lat: -8.35, lng: 115.0167 },
    heroImage: "/images/pantai-soka.jpg",
    description: [
      "Pantai Soka is a hidden gem on Bali's southwest coast, known for its dramatic black volcanic sand and powerful waves. The beach offers a more rugged and natural experience compared to the popular southern beaches.",
      "The beach is surrounded by rice terraces and coconut groves, creating a stunning contrast between the green landscape and the dark sand. It's particularly beautiful during sunset when the sky reflects off the wet sand.",
      "While not suitable for swimming due to strong currents, Pantai Soka is perfect for long walks, photography, and experiencing Bali's raw natural beauty. The area remains relatively untouched by mass tourism.",
    ],
    gallery: [
      "/images/pantai-soka.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "pantai-suraberata": {
    name: "Pantai Suraberata",
    location: "Suraberata, Tabanan Regency",
    coordinates: { lat: -8.3667, lng: 115.0333 },
    heroImage: "/images/pantai-suraberata.jpg",
    description: [
      "Pantai Suraberata is a secluded beach with volcanic black sand located on Bali's west coast. This pristine beach offers tranquility and stunning sunset views away from the crowds.",
      "The beach is characterized by its wide stretch of dark sand, gentle waves, and backdrop of coconut palms and rice fields. It's an ideal spot for peaceful walks and meditation.",
      "Local fishermen still use traditional boats here, adding to the authentic atmosphere. The beach is perfect for those seeking solitude and wanting to experience Bali's natural beauty in its purest form.",
    ],
    gallery: [
      "/images/pantai-suraberata.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "alas-kedaton": {
    name: "Alas Kedaton",
    location: "Kukuh, Marga, Tabanan Regency",
    coordinates: { lat: -8.4167, lng: 115.1667 },
    heroImage: "/images/alas-kedaton.jpg",
    description: [
      "Alas Kedaton is a sacred monkey forest sanctuary located in Tabanan Regency. The forest is home to hundreds of long-tailed macaques and fruit bats, living in harmony within this protected area.",
      "At the heart of the forest stands an ancient temple called Pura Alas Kedaton, which is believed to be over 600 years old. The temple is dedicated to the Hindu god Ganesha and is an important spiritual site for locals.",
      "Visitors can walk through well-maintained paths while observing the playful monkeys and massive fruit bats hanging from the trees. The forest provides a unique opportunity to experience Bali's wildlife and spiritual heritage in one location.",
    ],
    gallery: [
      "/images/alas-kedaton.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  uluwatu: {
    name: "Uluwatu Temple",
    location: "Pecatu, South Kuta, Badung Regency",
    coordinates: { lat: -8.8292, lng: 115.0856 },
    heroImage: "/images/uluwatu.jpg",
    description: [
      "Uluwatu Temple is one of Bali's most spectacular clifftop temples, perched 70 meters above the crashing waves of the Indian Ocean. This ancient sea temple is one of the six key temples believed to be Bali's spiritual pillars.",
      "Built in the 11th century, Uluwatu is dedicated to Sang Hyang Widhi Wasa in his manifestation as Rudra. The temple is famous for its stunning sunset views and the traditional Kecak fire dance performances held every evening.",
      "The temple complex is also home to hundreds of monkeys, so visitors should be careful with their belongings. The dramatic clifftop location and ancient architecture make Uluwatu one of Bali's most photographed and visited temples.",
    ],
    gallery: [
      "/images/uluwatu.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "mount-batur": {
    name: "Mount Batur",
    location: "Kintamani, Bangli Regency",
    coordinates: { lat: -8.2422, lng: 115.3758 },
    heroImage: "/images/mount-batur.jpg",
    description: [
      "Mount Batur is an active volcano located in the central highlands of Bali. Standing at 1,717 meters above sea level, it's one of Bali's most popular trekking destinations, especially for sunrise hikes.",
      "The trek to the summit typically starts at 3:30 AM and takes about 2 hours. Hikers are rewarded with breathtaking sunrise views over Lake Batur and the surrounding mountains. On clear days, you can see Mount Agung and Mount Rinjani in Lombok.",
      "The area around Mount Batur is geothermally active, with natural hot springs at Toya Devasya where visitors can relax after the challenging hike. The volcano last erupted in 2000, and its crater lake is considered sacred by the Balinese.",
    ],
    gallery: [
      "/images/mount-batur.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  tegallalang: {
    name: "Tegallalang Rice Terraces",
    location: "Tegallalang, Gianyar Regency",
    coordinates: { lat: -8.4364, lng: 115.2739 },
    heroImage: "/images/tegallalang.jpg",
    description: [
      "Tegallalang Rice Terraces are among Bali's most famous and photographed landscapes. Located just 20 minutes north of Ubud, these terraces showcase the traditional Balinese cooperative irrigation system called Subak.",
      "The terraces are carved into the hillside and create a stunning green staircase effect that changes with the seasons. The best time to visit is during the growing season when the rice is lush and green, typically from October to March.",
      "Visitors can walk through the terraces on designated paths, enjoy coffee at one of the many cafes overlooking the fields, or try the famous Bali swing for an adrenaline rush with spectacular views. The area has been recognized by UNESCO as a World Heritage site.",
    ],
    gallery: [
      "/images/tegallalang.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "sekumpul-waterfall": {
    name: "Sekumpul Waterfall",
    location: "Sekumpul, Sukasada, Buleleng Regency",
    coordinates: { lat: -8.1539, lng: 115.1331 },
    heroImage: "/images/sekumpul-waterfall.jpg",
    description: [
      "Sekumpul Waterfall is often considered the most beautiful waterfall in Bali. Located in the northern part of the island, this spectacular waterfall actually consists of seven different falls cascading down from heights of up to 80 meters.",
      "The trek to reach Sekumpul is an adventure in itself, involving a 30-45 minute hike through lush tropical forest, crossing rivers, and navigating steep paths. The effort is well worth it as you're rewarded with one of Bali's most pristine natural wonders.",
      "The name 'Sekumpul' means 'group' in Balinese, referring to the cluster of waterfalls. The area remains relatively untouched by mass tourism, offering visitors a chance to experience Bali's natural beauty in its purest form.",
    ],
    gallery: [
      "/images/sekumpul-waterfall.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  jatiluwih: {
    name: "Jatiluwih Rice Terraces",
    location: "Jatiluwih, Tabanan Regency",
    coordinates: { lat: -8.3644, lng: 115.1328 },
    heroImage: "/images/jatiluwih.jpg",
    description: [
      "Jatiluwih Rice Terraces represent the pinnacle of Bali's agricultural heritage. Covering over 600 hectares, these expansive terraces are part of the UNESCO World Heritage-listed Cultural Landscape of Bali Province.",
      "The name 'Jatiluwih' means 'truly marvelous' in Balinese, and the terraces live up to their name with panoramic views of emerald green rice fields stretching as far as the eye can see, backed by the majestic Mount Batukaru.",
      "The terraces use the traditional Subak irrigation system, which has been practiced for over 1,000 years. Visitors can explore the area on foot or by bicycle, enjoying the cool mountain air and learning about traditional Balinese farming methods from local farmers.",
    ],
    gallery: [
      "/images/jatiluwih.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "nusa-penida": {
    name: "Nusa Penida",
    location: "Klungkung Regency",
    coordinates: { lat: -8.7274, lng: 115.5442 },
    heroImage: "/images/nusa-penida.jpg",
    description: [
      "Nusa Penida is the largest of the three Nusa Islands southeast of Bali. This rugged island has become increasingly popular for its dramatic landscapes, pristine beaches, and crystal-clear waters perfect for snorkeling and diving.",
      "The island is famous for attractions like Kelingking Beach with its T-Rex shaped cliff, Angel's Billabong natural infinity pool, and Broken Beach with its natural archway. The island also offers excellent opportunities to see manta rays and the rare Bali Starling bird.",
      "Getting to Nusa Penida requires a 45-minute speedboat ride from Sanur or Padang Bai. The island's infrastructure is still developing, making it perfect for adventurous travelers seeking unspoiled natural beauty and authentic experiences.",
    ],
    gallery: [
      "/images/nusa-penida.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "kuta-beach": {
    name: "Kuta Beach",
    location: "Kuta, Badung Regency",
    coordinates: { lat: -8.7183, lng: 115.1686 },
    heroImage: "/images/kuta-beach.jpg",
    description: [
      "Kuta Beach is Bali's most famous beach and the heart of the island's tourism industry. This 2.5-kilometer stretch of golden sand has been attracting surfers and sun-seekers since the 1970s, making it the birthplace of Bali's tourism boom.",
      "The beach is perfect for beginner surfers with its consistent waves and numerous surf schools. As the sun sets, Kuta transforms into a vibrant party destination with beachfront bars, restaurants, and clubs that keep the energy going well into the night.",
      "Beyond the beach, Kuta offers excellent shopping opportunities from local markets to modern malls, making it a complete destination for travelers. The area also serves as a convenient base with Ngurah Rai International Airport just minutes away.",
    ],
    gallery: [
      "/images/kuta-beach.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  seminyak: {
    name: "Seminyak Beach",
    location: "Seminyak, Badung Regency",
    coordinates: { lat: -8.6906, lng: 115.1656 },
    heroImage: "/images/seminyak.jpg",
    description: [
      "Seminyak Beach represents the sophisticated side of Bali, known for its upscale beach clubs, luxury resorts, and world-class dining scene. This trendy area attracts discerning travelers seeking style and comfort.",
      "The beach itself features wide stretches of golden sand perfect for sunbathing, with some of the best beach clubs in Asia offering day beds, infinity pools, and gourmet cuisine. The sunset views from Seminyak are particularly spectacular.",
      "Seminyak is also a shopping paradise with high-end boutiques, art galleries, and designer stores. The area seamlessly blends Balinese culture with international sophistication, making it a favorite among celebrities and luxury travelers.",
    ],
    gallery: [
      "/images/seminyak.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "sanur-beach": {
    name: "Sanur Beach",
    location: "Sanur, Denpasar",
    coordinates: { lat: -8.6881, lng: 115.2608 },
    heroImage: "/images/sanur-beach.jpg",
    description: [
      "Sanur Beach is known as Bali's first beach resort and maintains a peaceful, family-friendly atmosphere. The beach faces east, making it perfect for spectacular sunrise views and calm morning swims.",
      "The shallow, reef-protected waters make Sanur ideal for families with children, stand-up paddleboarding, and beginner water sports. The beach is lined with traditional warungs and upscale resorts, offering options for every budget.",
      "Sanur's laid-back vibe attracts visitors seeking relaxation over partying. The area features a beautiful beachfront walking path, traditional markets, and is the main departure point for boat trips to the Nusa Islands.",
    ],
    gallery: [
      "/images/sanur-beach.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "besakih-temple": {
    name: "Besakih Temple",
    location: "Besakih, Karangasem Regency",
    coordinates: { lat: -8.3742, lng: 115.4506 },
    heroImage: "/images/besakih-temple.jpg",
    description: [
      "Besakih Temple, known as the 'Mother Temple of Bali,' is the largest and holiest temple complex on the island. Located on the slopes of Mount Agung, this sacred site consists of 23 separate temples spread across seven terraced levels.",
      "The temple complex has been a place of worship for over 1,000 years and is considered the most important temple in the Balinese Hindu religion. The main temple, Pura Penataran Agung, features towering black stone structures and intricate carvings.",
      "Besakih offers stunning views of the surrounding rice fields and Mount Agung. The temple is particularly significant during major Hindu festivals when thousands of devotees come to pray and make offerings, creating a vibrant display of Balinese culture and spirituality.",
    ],
    gallery: [
      "/images/besakih-temple.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "goa-gajah": {
    name: "Goa Gajah (Elephant Cave)",
    location: "Bedulu, Blahbatuh, Gianyar Regency",
    coordinates: { lat: -8.5225, lng: 115.2881 },
    heroImage: "/images/goa-gajah.jpg",
    description: [
      "Goa Gajah, or Elephant Cave, is a significant archaeological site dating back to the 9th century. Despite its name, the cave has no connection to elephants - the name likely comes from the nearby Petanu River, which was once called Lwa Gajah (Elephant River).",
      "The cave entrance is carved with intricate menacing faces and demons intended to ward off evil spirits. Inside the cave, visitors can see ancient stone carvings, meditation niches, and a statue of the Hindu god Ganesha, the remover of obstacles.",
      "The site also features ancient bathing pools, fountains, and stone carvings that showcase the artistic skills of ancient Balinese craftsmen. Goa Gajah provides insight into Bali's rich cultural and religious heritage, making it a must-visit for history enthusiasts.",
    ],
    gallery: [
      "/images/goa-gajah.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "tirta-empul": {
    name: "Tirta Empul Temple",
    location: "Tampaksiring, Gianyar Regency",
    coordinates: { lat: -8.4153, lng: 115.3156 },
    heroImage: "/images/tirta-empul.jpg",
    description: [
      "Tirta Empul Temple is one of Bali's most sacred water temples, famous for its holy spring water that has been used for purification rituals for over 1,000 years. The temple was built around a natural spring that bubbles up into a large, crystal-clear pool.",
      "Balinese Hindus and visitors from around the world come here to participate in purification ceremonies, bathing in the sacred waters that are believed to have healing properties. The ritual involves moving through a series of fountains, each with specific spiritual significance.",
      "The temple complex features beautiful traditional Balinese architecture with intricate stone carvings and multiple courtyards. The site also includes the presidential palace built during the Sukarno era, adding historical significance to this spiritual destination.",
    ],
    gallery: [
      "/images/tirta-empul.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "ubud-monkey-forest": {
    name: "Ubud Monkey Forest",
    location: "Ubud, Gianyar Regency",
    coordinates: { lat: -8.5189, lng: 115.2594 },
    heroImage: "/images/ubud-monkey-forest.jpg",
    description: [
      "The Sacred Monkey Forest Sanctuary, located in the heart of Ubud, is home to over 700 long-tailed macaques living in their natural habitat. This 12.5-hectare sanctuary serves as both a conservation area and an important spiritual site for the local community.",
      "The forest contains three ancient temples dating back to the 14th century: Pura Dalem Agung Padangtegal, Pura Beji, and Pura Prajapati. These temples are integral to the spiritual life of the local village and showcase traditional Balinese architecture.",
      "Visitors can walk through well-maintained paths while observing the playful monkeys in their natural environment. The sanctuary plays a crucial role in conservation education and research, while the entrance fees help support both the monkeys and the local community.",
    ],
    gallery: [
      "/images/ubud-monkey-forest.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "campuhan-ridge": {
    name: "Campuhan Ridge Walk",
    location: "Ubud, Gianyar Regency",
    coordinates: { lat: -8.5014, lng: 115.2531 },
    heroImage: "/images/campuhan-ridge.jpg",
    description: [
      "The Campuhan Ridge Walk is one of Ubud's most scenic and accessible nature walks. This easy 2-kilometer trail follows a ridge between two rivers, offering panoramic views of lush green hills, valleys, and traditional Balinese villages.",
      "The walk begins near the Campuhan Bridge and takes about 1-2 hours to complete at a leisurely pace. The trail is well-marked and suitable for all fitness levels, making it perfect for families and those seeking a peaceful escape into nature.",
      "Early morning is the best time to do the walk when the air is cool and the light is perfect for photography. Along the way, visitors can enjoy views of tropical vegetation, rice fields, and the distant mountains, making it a favorite among nature lovers and Instagram enthusiasts.",
    ],
    gallery: [
      "/images/campuhan-ridge.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "gitgit-waterfall": {
    name: "Gitgit Waterfall",
    location: "Gitgit, Sukasada, Buleleng Regency",
    coordinates: { lat: -8.1833, lng: 115.1333 },
    heroImage: "/images/gitgit-waterfall.jpg",
    description: [
      "Gitgit Waterfall is one of Bali's most accessible and impressive waterfalls, cascading 35 meters down through lush tropical forest. Located in the northern highlands, this waterfall offers a refreshing escape from the heat of the coastal areas.",
      "The waterfall is reached via a pleasant 10-minute walk through coffee and spice plantations, where visitors can learn about local agriculture and sample fresh tropical fruits. The path is well-maintained and suitable for most visitors.",
      "The pool at the base of the waterfall is perfect for swimming and cooling off after the walk. The surrounding area is rich in biodiversity, with various tropical plants, birds, and butterflies creating a natural paradise for nature enthusiasts.",
    ],
    gallery: [
      "/images/gitgit-waterfall.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "banyumala-waterfall": {
    name: "Banyumala Twin Waterfall",
    location: "Wanagiri, Sukasada, Buleleng Regency",
    coordinates: { lat: -8.1833, lng: 115.1167 },
    heroImage: "/images/banyumala-waterfall.jpg",
    description: [
      "Banyumala Twin Waterfall is one of Bali's hidden gems, featuring two beautiful waterfalls cascading side by side into crystal-clear natural pools. This relatively new tourist destination offers an unspoiled natural experience away from the crowds.",
      "The trek to reach Banyumala takes about 20-30 minutes through tropical forest and involves some steep sections and river crossings. The effort is rewarded with pristine waterfalls perfect for swimming and photography.",
      "The twin falls create natural pools with incredibly clear, cool water that's perfect for swimming. The surrounding jungle setting provides excellent opportunities for nature photography and peaceful contemplation in one of Bali's most beautiful natural settings.",
    ],
    gallery: [
      "/images/banyumala-waterfall.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "lovina-beach": {
    name: "Lovina Beach",
    location: "Buleleng Regency",
    coordinates: { lat: -8.1581, lng: 115.0264 },
    heroImage: "/images/lovina-beach.jpg",
    description: [
      "Lovina Beach is a peaceful stretch of black volcanic sand beach on Bali's northern coast, famous for its calm waters and spectacular dolphin watching opportunities. This laid-back area offers a completely different experience from the busy southern beaches.",
      "The main attraction is the early morning dolphin watching tours, where visitors can see pods of wild dolphins playing in their natural habitat. The calm waters of the Bali Sea provide perfect conditions for these gentle marine mammals.",
      "Lovina's relaxed atmosphere makes it perfect for those seeking tranquility. The area offers excellent snorkeling and diving opportunities, with nearby coral reefs and the famous Liberty Wreck at Tulamben just a short drive away.",
    ],
    gallery: [
      "/images/lovina-beach.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "amed-beach": {
    name: "Amed Beach",
    location: "Amed, Karangasem Regency",
    coordinates: { lat: -8.3456, lng: 115.6667 },
    heroImage: "/images/amed-beach.jpg",
    description: [
      "Amed Beach is a traditional fishing village on Bali's eastern coast, renowned for its excellent diving and snorkeling opportunities. The area consists of several small fishing villages stretched along 14 kilometers of coastline with dramatic black sand beaches.",
      "The waters around Amed are crystal clear with vibrant coral reefs just meters from the shore, making it perfect for snorkeling directly from the beach. The area is also famous for the USAT Liberty shipwreck at nearby Tulamben, one of the world's most accessible wreck dives.",
      "Amed maintains its authentic character with traditional salt farming and fishing still being the main livelihoods. Visitors can witness the daily life of local fishermen and the traditional salt-making process, providing insight into Bali's coastal culture.",
    ],
    gallery: [
      "/images/amed-beach.jpg",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
}

interface PageProps {
  params: {
    id: string
  }
}

export default function DestinationDetailPage({ params }: PageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const destination = destinationsData[params.id as keyof typeof destinationsData]

  if (!destination) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#050d21] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg md:text-xl font-bold">
            Explore <span className="text-[#4aa4e9]">Bali</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-[#4aa4e9] transition-colors">
              Home
            </Link>
            <Link href="/destinations" className="text-[#4aa4e9]">
              Destinations
            </Link>
            <Link href="/about" className="hover:text-[#4aa4e9] transition-colors">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 relative z-50 transition-all duration-300 ease-in-out hover:bg-white/10 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-75"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-700 mt-4">
            <div className="flex flex-col space-y-1 pt-4 pb-4">
              <Link
                href="/"
                className={`hover:text-[#4aa4e9] transition-all duration-200 px-4 py-3 rounded-lg hover:bg-white/10 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? "100ms" : "0ms" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/destinations"
                className={`text-[#4aa4e9] hover:text-[#4aa4e9] transition-all duration-200 px-4 py-3 rounded-lg hover:bg-white/10 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? "150ms" : "0ms" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="/about"
                className={`hover:text-[#4aa4e9] transition-all duration-200 px-4 py-3 rounded-lg hover:bg-white/10 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? "200ms" : "0ms" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-8 py-4">
        <Link href="/destinations">
          <Button variant="ghost" className="flex items-center gap-2 text-[#050d21] hover:text-[#4aa4e9]">
            <ArrowLeft className="w-4 h-4" />
            Back to Destinations
          </Button>
        </Link>
      </div>

      {/* Destination Content */}
      <div className="max-w-4xl mx-auto px-8 pb-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-[#050d21] mb-4">{destination.name}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <MapPin className="w-5 h-5 mr-2" />
            {destination.location}
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8">
          <Image
            src={destination.heroImage || "/placeholder.svg"}
            alt={destination.name}
            width={800}
            height={400}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* Description */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#050d21] mb-6">Description</h2>
          <div className="space-y-4">
            {destination.description.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Interactive Map */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#050d21] mb-6">Location</h2>
          <div className="mb-4">
            <p className="text-gray-600 mb-2">
              Click and drag to explore the map. The marker shows the exact location of {destination.name}.
            </p>
            <p className="text-sm text-gray-500">
              Coordinates: {destination.coordinates.lat.toFixed(4)}, {destination.coordinates.lng.toFixed(4)}
            </p>
          </div>
          <InteractiveMap
            latitude={destination.coordinates.lat}
            longitude={destination.coordinates.lng}
            destinationName={destination.name}
            zoom={13}
          />
        </div>

        {/* Photo Gallery */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#050d21] mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {destination.gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${destination.name} ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
