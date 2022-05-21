import Cookies from "universal-cookie";

class FetchService {
  public fetch(url: string, type: string, data?: object): Promise<any> {
    return fetch(`${url}`, {
      body: data ? JSON.stringify(data) : null,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: type,
    })
      .then((response: Response) => response.json())
      .then(this.handleErrors)
      .catch((error) => {
        throw error;
      });
  }

  public fetchAuthed(
    url: string,
    token: string,
    type: string,
    data?: object
  ): Promise<any> {
    return fetch(`${url}`, {
      body: data ? JSON.stringify({ ...data }) : null,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: type,
    })
      .then((response: Response) => response.json())
      .then(this.handleErrors)
      .catch((error) => {
        throw error;
      });
  }

  public handleErrors(response: string): string {
    if (response === "TypeError: Failed to fetch") {
      throw Error("Server error.");
    }
    return response;
  }
}

export default new FetchService();
