export interface Alert {
  message: string;
  type: "info" | "success" | "warning" | "error";
}

export interface AlertState {
  alert: Alert | null;
  showAlert: boolean;
}

export interface ShowAlertAction {
  type: "SHOW_ALERT";
  payload: Alert;
}

export interface HideAlertAction {
  type: "HIDE_ALERT";
}

export type AlertAction = ShowAlertAction | HideAlertAction;

export interface AlertContextProps {
  alert: Alert | null;
  showAlert: (
    message: string,
    type?: "info" | "success" | "warning" | "error"
  ) => void;
  hideAlert: () => void;
}
