import { ISite } from 'src/app/interfaces/ISite';
interface reservationRequest {
  departureSite: Number;
  departureMeetingPoint: Number;
  departureDate: string;
  arrivalDate: string;
  arrivalSite: Number;
  arrivalMeetingPoint: Number;
  departureHour: string;
  arrivalHour: string;
  departureFlightNumber?: string;
  arrivalFlightNumber?: string;
  notes?: string;
}

export { reservationRequest };
