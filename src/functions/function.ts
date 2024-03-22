/**
 * Convertit les erreurs en objet JSON.
 * @param error - L'objet Error à convertir.
 * @returns Un objet contenant le message d'erreur et la stack trace.
 */
export const errorToJson = (error: Error) => {
    return {
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    };
  };
  
  /**
   * Génère une réponse de succès pour une requête.
   * @param res - L'objet Response de Express.
   * @param data - Les données à envoyer dans la réponse.
   * @param statusCode - Le code de statut HTTP pour la réponse.
   */
  export const sendSuccess = (res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }, data: any, statusCode = 200) => {
    res.status(statusCode).json(data);
  };
  
  /**
   * Génère une réponse d'erreur pour une requête.
   * @param res - L'objet Response de Express.
   * @param errorMessage - Le message d'erreur à envoyer.
   * @param statusCode - Le code de statut HTTP pour la réponse.
   */
  export const sendError = (res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: any; }): void; new(): any; }; }; }, errorMessage: any, statusCode = 500) => {
    res.status(statusCode).json({ error: errorMessage });
  };
  
  /**
   * Parse les données JSON en toute sécurité.
   * @param jsonString - La chaîne JSON à parser.
   * @returns L'objet JavaScript ou null si le parsing échoue.
   */
  export const safeJsonParse = (jsonString: string) => {
    try {
      return JSON.parse(jsonString);
    } catch {
      return null;
    }
  };
  