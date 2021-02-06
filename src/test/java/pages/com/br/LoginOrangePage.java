package pages.com.br;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import hooks.com.br.hooks;

public class LoginOrangePage {
	
	public WebDriver driver;
	
	public LoginOrangePage() {
		driver = hooks.getDriver();
		PageFactory.initElements(driver, this);
	}

	@FindBy(id="txtUsername")
	public WebElement IdCampoUsuario;
	
	@FindBy(id="txtPassword")
	public WebElement IdCampoSenha;
	
	@FindBy(id="btnLogin")
	public WebElement IdBotaoLogin;
	
	@FindBy(id="welcome")
	public WebElement IdValidacaoLogin;
	
	public void PreecheCampos(String usuario, String senha) {
		IdCampoUsuario.sendKeys(usuario);
		IdCampoSenha.sendKeys(senha);
	}
	
	public void ClickBotaoLogin() {
		IdBotaoLogin.click();
		
	}
	
	public void ValidaLogin() {
		if(IdValidacaoLogin.isDisplayed() == false) {
			Assert.fail("sistema não realizou o login");
		}
	}
}

