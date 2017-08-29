package schlaepfer.com.plugin.rest;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

import sailpoint.integration.ListResult;
import sailpoint.rest.plugin.AllowAll;
import sailpoint.rest.plugin.BasePluginResource;
import sailpoint.tools.GeneralException;

public class BoilerPlateRequestAccessResource extends BasePluginResource {

	private static final String PLUGIN_NAME = "BoilerplatePlugin";

	@GET
	@Path("identities")
	@Consumes("application/vnd.boilderplate-v1+json")
	@AllowAll
	public ListResult getIdentities() throws GeneralException {
		List newList = new ArrayList<>();
		
		return new ListResult(newList, newList.size());
	}

	@Override
	public String getPluginName() {
		return PLUGIN_NAME;
	}

}
