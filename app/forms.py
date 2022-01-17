from django.forms import EmailField

from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.forms import UserCreationForm
from .models import User


class SignUpForm(UserCreationForm):

    class Meta:
        model = User
        fields = ('email', 'username', 'password1', 'password2')

    def save(self, commit=True):
        user = super(SignUpForm, self).save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user