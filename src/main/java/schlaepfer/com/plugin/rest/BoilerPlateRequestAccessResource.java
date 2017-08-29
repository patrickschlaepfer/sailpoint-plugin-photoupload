package schlaepfer.com.plugin.rest;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import sailpoint.integration.ListResult;
import sailpoint.integration.RequestResult;
import sailpoint.rest.plugin.AllowAll;
import sailpoint.rest.plugin.BasePluginResource;
import sailpoint.tools.GeneralException;

public class BoilerPlateRequestAccessResource extends BasePluginResource {

	private static final String PLUGIN_NAME = "BoilerplatePlugin";
	private static Log logger = LogFactory.getLog(BoilerPlateRequestAccessResource.class);

	@GET
	@Path("identities")
	@Consumes("application/vnd.boilerplate-v1+json")
	@AllowAll
	public ListResult getIdentities() throws GeneralException {
		List newList = new ArrayList<>();
		ListResult retResult = null;
		
		try {
		
			retResult = new ListResult(newList, newList.size());
			
		} catch (Throwable thr) {
            logger.error("Exception while getting non personal accounts");
            retResult = new ListResult(nonPersonalAccountDTOs, nonPersonalAccountDTOs.size());
            retResult.setStatus(RequestResult.STATUS_FAILURE);
            retResult.addError(thr);
		}	
		return retResult;
	}
	
	@POST
    @Consumes("application/vnd.boilerplate-v1+json")
    @Path("getIdentites")
    @AllowAll
    public ListResult getSelectedIdentites(Map<String, Object> request) throws GeneralException {
           ListResult retResult = null;
           IdentitesSearchDTO identitesSearchDTO = null;
           List<IdentityDTO> identitesDTO = new ArrayList<>();
           
           ObjectMapper mapper = new ObjectMapper();
           try {
                  identitesSearchDTO = mapper.convertValue(request, IdentitesSearchDTO.class);
                  
           } catch (Throwable thr) {
               logger.error("Exception while getSelectedIdentites", thr);
               retResult = new ListResult(identitesDTO, identitesDTO.size());
               retResult.addError(thr);
           }
           
           return retResult;
           
	}
	

	@Override
	public String getPluginName() {
		return PLUGIN_NAME;
	}

}
