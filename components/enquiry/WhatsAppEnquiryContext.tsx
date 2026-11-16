"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface EnquiryOptions {
  service?: string;
  vehicleModel?: string;
  vehicleSize?: string;
  preferredDate?: string;
  isPickupDelivery?: boolean;
  notes?: string;
}

interface WhatsAppEnquiryContextType {
  isOpen: boolean;
  openEnquiryModal: (options?: EnquiryOptions) => void;
  closeEnquiryModal: () => void;
  options: EnquiryOptions;
}

const WhatsAppEnquiryContext = createContext<WhatsAppEnquiryContextType | undefined>(undefined);

export function WhatsAppEnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<EnquiryOptions>({});

  const openEnquiryModal = (opts?: EnquiryOptions) => {
    setOptions(opts || {});
    setIsOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsOpen(false);
  };

  return (
    <WhatsAppEnquiryContext.Provider
      value={{
        isOpen,
        openEnquiryModal,
        closeEnquiryModal,
        options,
      }}
    >
      {children}
    </WhatsAppEnquiryContext.Provider>
  );
}

export function useWhatsAppEnquiry() {
  const context = useContext(WhatsAppEnquiryContext);
  if (!context) {
    throw new Error("useWhatsAppEnquiry must be used within a WhatsAppEnquiryProvider");
  }
  return context;
}

