import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroPosterSection } from './components/HeroPosterSection';
import { MenuSection } from './components/MenuSection';
import { PartyCostCalculator } from './components/PartyCostCalculator';
import { WeddingServicesSection } from './components/WeddingServicesSection';
import { VehicleSection } from './components/VehicleSection';
import { CommitmentAndReviews } from './components/CommitmentAndReviews';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';
import { BookingModal } from './components/BookingModal';
import { DishDetailModal } from './components/DishDetailModal';
import { POSTER_FEATURED_DISHES, DishItem, SetMenu } from './data/cateringData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDishModal, setSelectedDishModal] = useState<DishItem | null>(null);
  
  // Custom picked dishes for the party builder (default with 4 poster staples)
  const [customSelectedDishes, setCustomSelectedDishes] = useState<DishItem[]>([
    POSTER_FEATURED_DISHES[0], // Khai vị ngũ sắc
    POSTER_FEATURED_DISHES[1], // Gà bó xôi
    POSTER_FEATURED_DISHES[2], // Bò nhúng dấm
    POSTER_FEATURED_DISHES[3], // Lagu bò + Bánh mì
    POSTER_FEATURED_DISHES[4], // Lẩu hải sản / Lẩu cá bớp
    POSTER_FEATURED_DISHES[9], // Tráng miệng trái cây
  ]);

  const [bookingPrefillData, setBookingPrefillData] = useState<{
    tableCount?: number;
    menuName?: string;
    totalCost?: number;
    addOns?: string[];
    notes?: string;
  } | undefined>(undefined);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithData = (data: {
    tableCount: number;
    menuName: string;
    totalCost: number;
    addOns: string[];
    notes: string;
  }) => {
    setBookingPrefillData(data);
    setIsBookingOpen(true);
  };

  const handleSelectDishModal = (dish: DishItem) => {
    setSelectedDishModal(dish);
  };

  const handleToggleDishInCustomMenu = (dish: DishItem) => {
    setCustomSelectedDishes((prev) => {
      const exists = prev.some((d) => d.id === dish.id);
      if (exists) {
        return prev.filter((d) => d.id !== dish.id);
      } else {
        return [...prev, dish];
      }
    });
  };

  const handleRemoveCustomDish = (dishId: string) => {
    setCustomSelectedDishes((prev) => prev.filter((d) => d.id !== dishId));
  };

  const handleApplySetMenuToCalculator = (setMenu: SetMenu) => {
    // Scroll smoothly to calculator
    const el = document.getElementById('du-toan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoToCalculator = () => {
    const el = document.getElementById('du-toan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfaf8] text-slate-800 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Header with quick links & hotlines */}
      <Header
        onOpenBooking={handleOpenBooking}
        onNavigateSection={handleNavigateSection}
      />

      <main className="flex-1">
        {/* Main Poster Section replicating the user's poster */}
        <HeroPosterSection
          onOpenBooking={handleOpenBooking}
          onSelectDishModal={handleSelectDishModal}
          onGoToCalculator={handleGoToCalculator}
        />

        {/* Menu Section (Poster Featured Dishes & 4 Set Menus) */}
        <MenuSection
          onSelectDishModal={handleSelectDishModal}
          onAddDishToCustomMenu={handleToggleDishInCustomMenu}
          onApplySetMenuToCalculator={handleApplySetMenuToCalculator}
          selectedDishIdsInCustomMenu={customSelectedDishes.map((d) => d.id)}
        />

        {/* Interactive Party Cost Calculator */}
        <PartyCostCalculator
          onOpenBookingWithData={handleOpenBookingWithData}
          customSelectedDishes={customSelectedDishes}
          onRemoveCustomDish={handleRemoveCustomDish}
        />

        {/* Wedding Services & Royal Velvet Tents */}
        <WeddingServicesSection
          onOpenBooking={handleOpenBooking}
        />

        {/* Tourist Transport & Wedding Cars */}
        <VehicleSection
          onOpenBooking={handleOpenBooking}
        />

        {/* About Chị Ly, Golden Commitments & Reviews */}
        <CommitmentAndReviews
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onNavigateSection={handleNavigateSection}
      />

      {/* Floating Call & Zalo Bar */}
      <FloatingContactBar
        onOpenBooking={handleOpenBooking}
      />

      {/* Booking Form Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingPrefillData}
      />

      {/* Dish Detail Modal */}
      <DishDetailModal
        dish={selectedDishModal}
        onClose={() => setSelectedDishModal(null)}
        onToggleDishInCustomMenu={handleToggleDishInCustomMenu}
        isSelectedInMenu={
          selectedDishModal
            ? customSelectedDishes.some((d) => d.id === selectedDishModal.id)
            : false
        }
      />
    </div>
  );
}
