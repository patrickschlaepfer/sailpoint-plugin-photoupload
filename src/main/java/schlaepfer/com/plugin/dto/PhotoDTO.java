package schlaepfer.com.plugin.dto;

import java.io.Serializable;

public class PhotoDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String id;
	private String base64Data;
	
	public PhotoDTO() {}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getBase64Data() {
		return base64Data;
	}

	public void setBase64Data(String base64Data) {
		this.base64Data = base64Data;
	}
}
