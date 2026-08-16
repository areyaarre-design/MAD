interface ProgramData {
    code: string
    output: string
    input: string
}
export const madData: Record<string, ProgramData> = {
"Practical 1 :Basic Android App Develop a basic mobile application to display a message in center of screen..": {
    "code": `

MainActivity.java

package com.example.prectica1;

import android.graphics.Color;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        findViewById(R.id.name).setBackgroundColor(Color.RED);
        findViewById(R.id.qualification).setBackgroundColor(Color.GREEN);
        findViewById(R.id.contact).setBackgroundColor(Color.LTGRAY);
        findViewById(R.id.email).setBackgroundColor(Color.YELLOW);
        findViewById(R.id.address).setBackgroundColor(Color.MAGENTA);
    }
}

Activity_main.xml


<?xml version="1.0" encoding="utf-8"?>

<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#A9A9A9">

    <TextView
        android:id="@+id/name"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Name: John Doe"
        android:textColor="#000000"
        android:layout_marginTop="50dp"
        android:layout_centerHorizontal="true" />

    <TextView
        android:id="@+id/qualification"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Qualification: B.Sc Computer Science"
        android:textColor="#000000"
        android:layout_below="@id/name"
        android:layout_marginTop="20dp"
        android:layout_centerHorizontal="true" />

    <TextView
        android:id="@+id/contact"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Contact: 123-456-7890"
        android:textColor="#000000"
        android:layout_below="@id/qualification"
        android:layout_marginTop="20dp"
        android:layout_centerHorizontal="true" />

    <TextView
        android:id="@+id/email"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Email: john.doe@example.com"
        android:textColor="#000000"
        android:layout_below="@id/contact"
        android:layout_marginTop="20dp"
        android:layout_centerHorizontal="true" />

    <TextView
        android:id="@+id/address"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Address: 123 Main St, City, Country"
        android:textColor="#000080"
        android:layout_below="@id/email"
        android:layout_marginTop="20dp"
        android:layout_centerHorizontal="true" />

</RelativeLayout>




`,
    "output": ``,
    "input": ``
},
"Practical 2 :Basic android widgets Develop an application that asks user to enter user id and password. Upon receiving user id and password, application should compare both of them with prescribed values. Application should display appropriate message to user.": {
    "code": `

MainActivity.java

package com.example.practical2;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    EditText username, password;
    Button loginButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        username = findViewById(R.id.username);
        password = findViewById(R.id.password);
        loginButton = findViewById(R.id.loginButton);

        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String user = username.getText().toString();
                String pass = password.getText().toString();

                if (user.equals("admin") && pass.equals("1234")) {

                    Intent intent = new Intent(
                            MainActivity.this,
                            HomeActivity.class
                    );

                    intent.putExtra("USERNAME", user);

                    startActivity(intent);

                } else {

                    Toast.makeText(
                            MainActivity.this,
                            "Invalid Username or Password",
                            Toast.LENGTH_SHORT
                    ).show();
                }
            }
        });
    }
}

HomeActivity.java


package com.example.practical2;

import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class HomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_home);

        TextView welcomeText = findViewById(R.id.welcomeText);

        String username = getIntent().getStringExtra("USERNAME");

        welcomeText.setText("Welcome, " + username + "!");
    }
}



Activity_main.xml


<?xml version="1.0" encoding="utf-8"?>

<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp">

    <EditText
        android:id="@+id/username"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Username" />

    <EditText
        android:id="@+id/password"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Password"
        android:layout_below="@id/username"
        android:layout_marginTop="10dp"
        android:inputType="textPassword" />

    <Button
        android:id="@+id/loginButton"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Login"
        android:layout_below="@id/password"
        android:layout_marginTop="20dp" />

</RelativeLayout>







activity_home.xml

<?xml version="1.0" encoding="utf-8"?>

<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#A9A9A9">

    <TextView
        android:id="@+id/welcomeText"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="50dp"
        android:layout_centerHorizontal="true"
        android:textSize="24sp"
        android:textColor="#FFFFFF" />

</RelativeLayout>




android manifest.xml

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Practical2">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:windowSoftInputMode="adjustResize">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <activity
            android:name=".HomeActivity"
            android:exported="false" />
    </application>

</manifest>




`,
    "output": ``,
    "input": ``
},

"Practical 3 :Authentication, Validation and Toast Develop an authentication application that asks user to enter email id and password. Log In button should remain disabled until user enter email id in valid format. In case of successful authentication, user should be redirected to another activity which contains welcome message along with email id of authenticated user, otherwise appropriate error message should be displayed..": {
    "code": `

MainActivity.java

package com.example.practical3;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Patterns;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    EditText etEmail, etPassword;
    Button btnLogin;

    final String validEmail = "user@example.com";
    final String validPassword = "123456";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        etEmail = findViewById(R.id.etEmail);
        etPassword = findViewById(R.id.etPassword);
        btnLogin = findViewById(R.id.btnLogin);

        btnLogin.setEnabled(false);

        etEmail.addTextChangedListener(new TextWatcher() {

            @Override
            public void afterTextChanged(Editable s) {
                btnLogin.setEnabled(
                        Patterns.EMAIL_ADDRESS
                                .matcher(s.toString())
                                .matches()
                );
            }

            @Override
            public void beforeTextChanged(
                    CharSequence s,
                    int start,
                    int count,
                    int after) {
            }

            @Override
            public void onTextChanged(
                    CharSequence s,
                    int start,
                    int before,
                    int count) {
            }
        });

        btnLogin.setOnClickListener(v -> {

            String email = etEmail.getText().toString();
            String password = etPassword.getText().toString();

            if (email.equals(validEmail)
                    && password.equals(validPassword)) {

                Toast.makeText(
                        MainActivity.this,
                        "Login Successful",
                        Toast.LENGTH_SHORT
                ).show();

                Intent intent = new Intent(
                        MainActivity.this,
                        WelcomeActivity.class
                );

                intent.putExtra("email", email);

                startActivity(intent);

            } else {

                Toast.makeText(
                        MainActivity.this,
                        "Invalid Email or Password",
                        Toast.LENGTH_SHORT
                ).show();
            }
        });
    }
}

WelcomeActivity.java


package com.example.practical3;

import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class WelcomeActivity extends AppCompatActivity {

    TextView tvWelcome;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_welcome);

        tvWelcome = findViewById(R.id.tvWelcome);

        String email = getIntent().getStringExtra("email");

        tvWelcome.setText("Welcome, " + email + "!");
    }
}








Activity_main.xml


<?xml version="1.0" encoding="utf-8"?>

<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:padding="24dp"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <EditText
        android:id="@+id/etEmail"
        android:hint="Enter Email"
        android:inputType="textEmailAddress"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />

    <EditText
        android:id="@+id/etPassword"
        android:hint="Enter Password"
        android:inputType="textPassword"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="12dp" />

    <Button
        android:id="@+id/btnLogin"
        android:text="Log In"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="20dp" />

</LinearLayout>




activity_welcome.xml
LinearLayout

<?xml version="1.0" encoding="utf-8"?>

<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:gravity="center"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:id="@+id/tvWelcome"
        android:textSize="20sp"
        android:text="Welcome!"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />

</LinearLayout>





`,
    "output": ``,
    "input": ``
},

"Practical 4 :Options Menu Develop a menu driven application that provides facility to set background color of activity. User should be able to select background color from options menu.": {
    "code": `

MainActivity.java

package com.example.practical4;

import android.graphics.Color;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.RelativeLayout;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

public class MainActivity extends AppCompatActivity {

    RelativeLayout mainLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        mainLayout = findViewById(R.id.mainLayout);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.color_menu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        int id = item.getItemId();

        if (id == R.id.red) {
            mainLayout.setBackgroundColor(Color.RED);
            return true;

        } else if (id == R.id.green) {
            mainLayout.setBackgroundColor(Color.GREEN);
            return true;

        } else if (id == R.id.blue) {
            mainLayout.setBackgroundColor(Color.BLUE);
            return true;

        } else if (id == R.id.yellow) {
            mainLayout.setBackgroundColor(Color.YELLOW);
            return true;

        } else if (id == R.id.white) {
            mainLayout.setBackgroundColor(Color.WHITE);
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}






Activity_main.xml


<?xml version="1.0" encoding="utf-8"?>

<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <androidx.appcompat.widget.Toolbar
        android:id="@+id/toolbar"
        android:layout_width="match_parent"
        android:layout_height="?attr/actionBarSize"
        android:background="#87CEEB"
        app:title="Color Menu"
        app:titleTextColor="#000000" />

    <RelativeLayout
        android:id="@+id/mainLayout"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:background="#FFFFFF"
        android:padding="16dp">

    </RelativeLayout>

</LinearLayout>


res/menu/color_menu.xml

<?xml version="1.0" encoding="utf-8"?>

<menu
    xmlns:android="http://schemas.android.com/apk/res/android">

    <item
        android:id="@+id/red"
        android:title="Red" />

    <item
        android:id="@+id/green"
        android:title="Green" />

    <item
        android:id="@+id/blue"
        android:title="Blue" />

    <item
        android:id="@+id/yellow"
        android:title="Yellow" />

    <item
        android:id="@+id/white"
        android:title="White" />

</menu>






`,
    "output": ``,
    "input": ``
},

"Practical 5 :Handler and ThreadsDevelop an application that should increment the value of a text after specific interval of time. Also provide feature to stop incrementing value of the text.": {
    "code": `

MainActivity.java

package com.example.practical5;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private TextView tvCounter;
    private Button btnStart, btnStop;

    private Handler handler;
    private int counter = 0;
    private boolean isRunning = false;

    private Runnable runnable;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        tvCounter = findViewById(R.id.tvCounter);
        btnStart = findViewById(R.id.btnStart);
        btnStop = findViewById(R.id.btnStop);

        handler = new Handler(Looper.getMainLooper());

        runnable = new Runnable() {
            @Override
            public void run() {

                if (isRunning) {

                    counter++;

                    tvCounter.setText(String.valueOf(counter));

                    handler.postDelayed(this, 1000);
                }
            }
        };

        btnStart.setOnClickListener(v -> {

            if (!isRunning) {

                isRunning = true;

                handler.post(runnable);
            }
        });

        btnStop.setOnClickListener(v -> {

            isRunning = false;

            handler.removeCallbacks(runnable);
        });
    }
}







Activity_main.xml


<?xml version="1.0" encoding="utf-8"?>

<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="20dp">

    <TextView
        android:id="@+id/tvCounter"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="0"
        android:textSize="48sp"
        android:textStyle="bold"
        android:layout_marginBottom="30dp" />

    <Button
        android:id="@+id/btnStart"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Start" />

    <Button
        android:id="@+id/btnStop"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Stop"
        android:layout_marginTop="20dp" />

</LinearLayout>




`,
    "output": ``,
    "input": ``
},

"Practical 6 :Asynchronous task Develop an application that activates a progress bar on button click. The progress of progress bar (in form of %) should be shown accordingly. Appropriate message should be shown upon completion of increment in progress bar value.": {
    "code": `

MainActivity.java

package com.example.practical6;

import android.os.Bundle;
import android.os.Handler;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private ProgressBar progressBar;
    private TextView tvProgress;
    private Button btnStart;

    private int progressStatus = 0;
    private Handler handler = new Handler();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        progressBar = findViewById(R.id.progressBar);
        tvProgress = findViewById(R.id.tvProgress);
        btnStart = findViewById(R.id.btnStart);

        btnStart.setOnClickListener(v -> startTask());
    }

    private void startTask() {

        progressStatus = 0;

        progressBar.setProgress(progressStatus);
        tvProgress.setText("Progress: 0%");

        new Thread(() -> {

            while (progressStatus < 100) {

                progressStatus++;

                handler.post(() -> {

                    progressBar.setProgress(progressStatus);

                    tvProgress.setText(
                            "Progress: " + progressStatus + "%"
                    );
                });

                try {

                    Thread.sleep(50);

                } catch (InterruptedException e) {

                    e.printStackTrace();
                }
            }

            handler.post(() ->
                    tvProgress.setText(
                            "Task Completed Successfully!"
                    )
            );

        }).start();
    }
}











Activity_main.xml


<?xml version="1.0" encoding="utf-8"?>

<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="20dp"
    android:gravity="center">

    <ProgressBar
        android:id="@+id/progressBar"
        style="@android:style/Widget.ProgressBar.Horizontal"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:max="100"
        android:progress="0"
        android:indeterminate="false" />

    <TextView
        android:id="@+id/tvProgress"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Progress: 0%"
        android:layout_marginTop="20dp" />

    <Button
        android:id="@+id/btnStart"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Start Task"
        android:layout_marginTop="20dp" />

</LinearLayout>




`,
    "output": ``,
    "input": ``
},

"Practical 7 :Android Service Develop an android service that shows a message at specific interval of time. Also provide features to start and stop the service.": {
    "code": `

MainActivity.java

package com.example.practical6;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    Button btnStart, btnStop;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        btnStart = findViewById(R.id.btnStart);
        btnStop = findViewById(R.id.btnStop);

        btnStart.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {

                startService(
                        new Intent(
                                MainActivity.this,
                                MyService.class
                        )
                );
            }
        });

        btnStop.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {

                stopService(
                        new Intent(
                                MainActivity.this,
                                MyService.class
                        )
                );
            }
        });
    }
}






MyService.java

package com.example.practical6;

import android.app.Service;
import android.content.Intent;
import android.os.Handler;
import android.os.IBinder;
import android.widget.Toast;

public class MyService extends Service {

    private Handler handler;
    private Runnable runnable;

    private int interval = 5000; // 5 seconds

    @Override
    public void onCreate() {

        super.onCreate();

        handler = new Handler();

        runnable = new Runnable() {

            @Override
            public void run() {

                Toast.makeText(
                        getApplicationContext(),
                        "Service is running...",
                        Toast.LENGTH_SHORT
                ).show();

                handler.postDelayed(this, interval);
            }
        };
    }

    @Override
    public int onStartCommand(
            Intent intent,
            int flags,
            int startId) {

        handler.post(runnable);

        return START_STICKY;
    }

    @Override
    public void onDestroy() {

        super.onDestroy();

        handler.removeCallbacks(runnable);

        Toast.makeText(
                getApplicationContext(),
                "Service Stopped",
                Toast.LENGTH_SHORT
        ).show();
    }

    @Override
    public IBinder onBind(Intent intent) {

        return null;
    }
}








Activity_main.xml


<?xml version="1.0" encoding="utf-8"?>

<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical"
    android:padding="20dp">

    <Button
        android:id="@+id/btnStart"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Start Service" />

    <Button
        android:id="@+id/btnStop"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Stop Service"
        android:layout_marginTop="20dp" />

</LinearLayout>




AndroidManifest.xml


<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Practical6">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:windowSoftInputMode="adjustResize">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <service
            android:name=".MyService"
            android:enabled="true"
            android:exported="false" />
    </application>

</manifest>






`,
    "output": ``,
    "input": ``
},



"Practical 8 :Notifications Develop an android application that ask for upper bound and lower bound value of a range. The application should list out prime numbers existing between specified range on screen (utilize service running in background for searching prime numbers). Upon completion of operation, application should prompt the user through a notification.": {
    "code": `

MainActivity.java

package com.example.practical8;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.os.ResultReceiver;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private static final int REQ_NOTIF = 1001;

    private EditText etLower, etUpper;
    private TextView tvStatus, tvResults;

    private final ResultReceiver receiver =
            new ResultReceiver(new Handler(Looper.getMainLooper())) {

                @Override
                protected void onReceiveResult(
                        int resultCode,
                        Bundle resultData) {

                    if (resultCode == PrimeService.RESULT_PROGRESS) {

                        int checked = resultData.getInt("checked");
                        int total = resultData.getInt("total");

                        tvStatus.setText(
                                "Status: Checking "
                                        + checked
                                        + " / "
                                        + total
                        );

                    } else if (resultCode == PrimeService.RESULT_PRIME_FOUND) {

                        int prime = resultData.getInt("prime");

                        appendPrime(prime);

                    } else if (resultCode == PrimeService.RESULT_DONE) {

                        int count = resultData.getInt("count");

                        tvStatus.setText(
                                "Status: Completed. Found "
                                        + count
                                        + " primes."
                        );

                        Toast.makeText(
                                MainActivity.this,
                                "Prime search completed!",
                                Toast.LENGTH_SHORT
                        ).show();

                    } else if (resultCode == PrimeService.RESULT_ERROR) {

                        String msg = resultData.getString("error");

                        tvStatus.setText("Status: Error");

                        Toast.makeText(
                                MainActivity.this,
                                msg,
                                Toast.LENGTH_LONG
                        ).show();
                    }
                }
            };

    private void appendPrime(int prime) {

        String existing = tvResults.getText().toString();

        if (existing.isEmpty()) {

            tvResults.setText(String.valueOf(prime));

        } else {

            tvResults.append(", " + prime);
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        etLower = findViewById(R.id.etLower);
        etUpper = findViewById(R.id.etUpper);

        tvStatus = findViewById(R.id.tvStatus);
        tvResults = findViewById(R.id.tvResults);

        Button btnStart = findViewById(R.id.btnStart);

        maybeRequestNotificationPermission();

        btnStart.setOnClickListener(
                v -> startPrimeSearch()
        );
    }

    private void startPrimeSearch() {

        String lowStr =
                etLower.getText().toString().trim();

        String upStr =
                etUpper.getText().toString().trim();

        if (lowStr.isEmpty() || upStr.isEmpty()) {

            Toast.makeText(
                    this,
                    "Please enter both bounds.",
                    Toast.LENGTH_SHORT
            ).show();

            return;
        }

        long lower;
        long upper;

        try {

            lower = Long.parseLong(lowStr);
            upper = Long.parseLong(upStr);

        } catch (NumberFormatException e) {

            Toast.makeText(
                    this,
                    "Please enter valid numbers.",
                    Toast.LENGTH_SHORT
            ).show();

            return;
        }

        if (lower < 2) {
            lower = 2;
        }

        if (upper < lower) {

            Toast.makeText(
                    this,
                    "Upper bound must be >= lower bound.",
                    Toast.LENGTH_SHORT
            ).show();

            return;
        }

        tvStatus.setText("Status: Running...");
        tvResults.setText("");

        Intent intent =
                new Intent(this, PrimeService.class);

        intent.putExtra("lower", lower);
        intent.putExtra("upper", upper);
        intent.putExtra("receiver", receiver);

        startService(intent);
    }

    private void maybeRequestNotificationPermission() {

        if (Build.VERSION.SDK_INT >=
                Build.VERSION_CODES.TIRAMISU) {

            if (checkSelfPermission(
                    Manifest.permission.POST_NOTIFICATIONS)
                    != PackageManager.PERMISSION_GRANTED) {

                requestPermissions(
                        new String[]{
                                Manifest.permission.POST_NOTIFICATIONS
                        },
                        REQ_NOTIF
                );
            }
        }
    }

    @Override
    public void onRequestPermissionsResult(
            int requestCode,
            @NonNull String[] permissions,
            @NonNull int[] grantResults) {

        super.onRequestPermissionsResult(
                requestCode,
                permissions,
                grantResults
        );

        if (requestCode == REQ_NOTIF
                && (grantResults.length == 0
                || grantResults[0]
                != PackageManager.PERMISSION_GRANTED)) {

            Toast.makeText(
                    this,
                    "Notifications permission denied; completion alert may be silent.",
                    Toast.LENGTH_LONG
            ).show();
        }
    }
}


PrimeService.java

package com.example.practical8;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
import android.os.ResultReceiver;

import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

public class PrimeService extends Service {

    public static final int RESULT_PROGRESS = 1;
    public static final int RESULT_PRIME_FOUND = 2;
    public static final int RESULT_DONE = 3;
    public static final int RESULT_ERROR = 4;

    private static final String CHANNEL_ID =
            "prime_channel_id";

    @Override
    public void onCreate() {

        super.onCreate();

        createNotificationChannel();
    }

    @Override
    public int onStartCommand(
            Intent intent,
            int flags,
            int startId) {

        long lower =
                intent.getLongExtra("lower", 2);

        long upper =
                intent.getLongExtra("upper", 2);

        ResultReceiver receiver =
                intent.getParcelableExtra("receiver");

        new Thread(() -> {

            try {

                runPrimeSearch(
                        lower,
                        upper,
                        receiver
                );

                postCompletionNotification(
                        lower,
                        upper
                );

            } catch (Exception e) {

                if (receiver != null) {

                    Bundle bundle = new Bundle();

                    bundle.putString(
                            "error",
                            e.getMessage()
                    );

                    receiver.send(
                            RESULT_ERROR,
                            bundle
                    );
                }

            } finally {

                stopSelf(startId);
            }

        }).start();

        return START_NOT_STICKY;
    }

    private void runPrimeSearch(
            long lower,
            long upper,
            ResultReceiver receiver) {

        int total =
                (int) Math.max(
                        0,
                        upper - lower + 1
                );

        int checked = 0;
        int found = 0;

        for (long n = lower; n <= upper; n++) {

            if (isPrime(n)) {

                found++;

                if (receiver != null) {

                    Bundle primeBundle =
                            new Bundle();

                    primeBundle.putInt(
                            "prime",
                            (int) n
                    );

                    receiver.send(
                            RESULT_PRIME_FOUND,
                            primeBundle
                    );
                }
            }

            checked++;

            if (receiver != null
                    && checked % 200 == 0) {

                Bundle progressBundle =
                        new Bundle();

                progressBundle.putInt(
                        "checked",
                        checked
                );

                progressBundle.putInt(
                        "total",
                        total
                );

                receiver.send(
                        RESULT_PROGRESS,
                        progressBundle
                );
            }
        }

        if (receiver != null) {

            Bundle doneBundle =
                    new Bundle();

            doneBundle.putInt(
                    "count",
                    found
            );

            receiver.send(
                    RESULT_DONE,
                    doneBundle
            );
        }
    }

    private boolean isPrime(long n) {

        if (n < 2) {
            return false;
        }

        if (n % 2 == 0) {
            return n == 2;
        }

        if (n % 3 == 0) {
            return n == 3;
        }

        long limit =
                (long) Math.sqrt(n);

        for (long i = 5;
             i <= limit;
             i += 6) {

            if (n % i == 0
                    || n % (i + 2) == 0) {

                return false;
            }
        }

        return true;
    }

    private void postCompletionNotification(
            long lower,
            long upper) {

        Context context = this;

        Intent openAppIntent =
                new Intent(
                        context,
                        MainActivity.class
                );

        openAppIntent.setFlags(
                Intent.FLAG_ACTIVITY_NEW_TASK
                        | Intent.FLAG_ACTIVITY_CLEAR_TASK
        );

        PendingIntent pendingIntent =
                PendingIntent.getActivity(
                        context,
                        0,
                        openAppIntent,
                        Build.VERSION.SDK_INT >= Build.VERSION_CODES.M
                                ? PendingIntent.FLAG_IMMUTABLE
                                  | PendingIntent.FLAG_UPDATE_CURRENT
                                : PendingIntent.FLAG_UPDATE_CURRENT
                );

        Notification notification =
                new NotificationCompat.Builder(
                        context,
                        CHANNEL_ID
                )
                        .setSmallIcon(
                                android.R.drawable.ic_dialog_info
                        )
                        .setContentTitle(
                                "Prime search finished"
                        )
                        .setContentText(
                                "Completed for range "
                                        + lower
                                        + " to "
                                        + upper
                        )
                        .setContentIntent(pendingIntent)
                        .setAutoCancel(true)
                        .build();

        NotificationManagerCompat
                .from(context)
                .notify(
                        (int) System.currentTimeMillis(),
                        notification
                );
    }

    private void createNotificationChannel() {

        if (Build.VERSION.SDK_INT
                >= Build.VERSION_CODES.O) {

            String name =
                    "Prime Notifications";

            String description =
                    "Notifies when prime search completes";

            int importance =
                    NotificationManager.IMPORTANCE_DEFAULT;

            NotificationChannel channel =
                    new NotificationChannel(
                            CHANNEL_ID,
                            name,
                            importance
                    );

            channel.setDescription(description);

            NotificationManager manager =
                    getSystemService(
                            NotificationManager.class
                    );

            if (manager != null) {
                manager.createNotificationChannel(
                        channel
                );
            }
        }
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}








Activity_main.xml


<?xml version="1.0" encoding="utf-8"?>

<ScrollView
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="16dp">

        <EditText
            android:id="@+id/etLower"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="number"
            android:hint="Lower bound (e.g., 2)" />

        <EditText
            android:id="@+id/etUpper"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="8dp"
            android:inputType="number"
            android:hint="Upper bound (e.g., 100)" />

        <Button
            android:id="@+id/btnStart"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="12dp"
            android:text="Find Primes" />

        <TextView
            android:id="@+id/tvStatus"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="16dp"
            android:text="Status: Idle" />

        <TextView
            android:id="@+id/tvResults"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="8dp"
            android:padding="8dp"
            android:background="#EEEEEE"
            android:textIsSelectable="true" />

    </LinearLayout>

</ScrollView>



AndroidManifest.xml

<?xml version="1.0" encoding="utf-8"?>

<manifest
    xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission
        android:name="android.permission.POST_NOTIFICATIONS" />

    <application
        android:allowBackup="true"
        android:label="@string/app_name"
        android:supportsRtl="true"
        android:theme="@style/Theme.Practical8">

        <activity
            android:name=".MainActivity"
            android:exported="true">

            <intent-filter>

                <action
                    android:name="android.intent.action.MAIN" />

                <category
                    android:name="android.intent.category.LAUNCHER" />

            </intent-filter>

        </activity>

        <service
            android:name=".PrimeService"
            android:exported="false" />

    </application>

</manifest>





`,
    "output": ``,
    "input": ``
},

"Practical 9 :Read Contacts from Phone Develop an application that fetches all contacts phone book and displays on screen.": {
    "code": `

MainActivity.java

package com.example.practical9;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.ContentResolver;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    TextView tvContacts;

    private static final int PERMISSION_REQUEST_READ_CONTACTS = 100;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        tvContacts = findViewById(R.id.tvContacts);

        // Check permission
        if (ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.READ_CONTACTS
        ) != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(
                    this,
                    new String[]{
                            Manifest.permission.READ_CONTACTS
                    },
                    PERMISSION_REQUEST_READ_CONTACTS
            );

        } else {

            readContacts();
        }
    }

    @Override
    public void onRequestPermissionsResult(
            int requestCode,
            String[] permissions,
            int[] grantResults) {

        super.onRequestPermissionsResult(
                requestCode,
                permissions,
                grantResults
        );

        if (requestCode == PERMISSION_REQUEST_READ_CONTACTS) {

            if (grantResults.length > 0
                    && grantResults[0]
                    == PackageManager.PERMISSION_GRANTED) {

                readContacts();

            } else {

                tvContacts.setText("Permission Denied!");
            }
        }
    }

    private void readContacts() {

        StringBuilder sb = new StringBuilder();

        ContentResolver cr = getContentResolver();

        Cursor cursor = cr.query(
                ContactsContract.CommonDataKinds.Phone.CONTENT_URI,
                null,
                null,
                null,
                ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME
                        + " ASC"
        );

        if (cursor != null) {

            while (cursor.moveToNext()) {

                String name = cursor.getString(
                        cursor.getColumnIndex(
                                ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME
                        )
                );

                String phone = cursor.getString(
                        cursor.getColumnIndex(
                                ContactsContract.CommonDataKinds.Phone.NUMBER
                        )
                );

                sb.append("Name: ")
                        .append(name)
                        .append("\nPhone: ")
                        .append(phone)
                        .append("\n\n");
            }

            cursor.close();
        }

        tvContacts.setText(sb.toString());
    }
}





Activity_main.xml


<?xml version="1.0" encoding="utf-8"?>

<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="10dp">

    <TextView
        android:id="@+id/tvContacts"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Contacts will appear here..."
        android:textSize="16sp"
        android:padding="5dp"
        android:scrollbars="vertical" />

</LinearLayout>



AndroidManifest.xml

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">
    <uses-permission android:name="android.permission.READ_CONTACTS" />
    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Practical9">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:windowSoftInputMode="adjustResize">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>





`,
    "output": ``,
    "input": ``
},





"Practical 10 :Dynamic Generation of Widgets Develop an application that accepts a number from user. The application should dynamically generate accepted number of list items in another activity.": {
    "code": `

MainActivity.java

package com.example.practical10;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    EditText numberInput;
    Button generateBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        numberInput = findViewById(R.id.numberInput);
        generateBtn = findViewById(R.id.generateBtn);

        generateBtn.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {

                String numStr =
                        numberInput.getText().toString().trim();

                if (!numStr.isEmpty()) {

                    int number = Integer.parseInt(numStr);

                    Intent intent = new Intent(
                            MainActivity.this,
                            SecondActivity.class
                    );

                    intent.putExtra("count", number);

                    startActivity(intent);
                }
            }
        });
    }
}


SecondActivity.java
package com.example.practical10;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import java.util.ArrayList;

public class SecondActivity extends AppCompatActivity {

    RecyclerView recyclerView;
    ItemAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_second);

        recyclerView = findViewById(R.id.recyclerView);

        recyclerView.setLayoutManager(
                new LinearLayoutManager(this)
        );

        int count = getIntent().getIntExtra(
                "count",
                0
        );

        ArrayList<String> items =
                new ArrayList<>();

        for (int i = 1; i <= count; i++) {

            items.add("Item " + i);
        }

        adapter = new ItemAdapter(items);

        recyclerView.setAdapter(adapter);
    }
}




ItemAdapter.java

package com.example.practical10;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class ItemAdapter
        extends RecyclerView.Adapter<ItemAdapter.ViewHolder> {

    private ArrayList<String> items;

    public ItemAdapter(ArrayList<String> items) {

        this.items = items;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(
            @NonNull ViewGroup parent,
            int viewType) {

        View view = LayoutInflater
                .from(parent.getContext())
                .inflate(
                        R.layout.item_row,
                        parent,
                        false
                );

        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(
            @NonNull ViewHolder holder,
            int position) {

        holder.textView.setText(
                items.get(position)
        );
    }

    @Override
    public int getItemCount() {

        return items.size();
    }

    public static class ViewHolder
            extends RecyclerView.ViewHolder {

        TextView textView;

        public ViewHolder(View itemView) {

            super(itemView);

            textView = itemView.findViewById(
                    R.id.itemText
            );
        }
    }
}




Activity_main.xml


<?xml version="1.0" encoding="utf-8"?>

<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="20dp">

    <EditText
        android:id="@+id/numberInput"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Enter a number"
        android:inputType="number" />

    <Button
        android:id="@+id/generateBtn"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Generate List"
        android:layout_marginTop="16dp" />

</LinearLayout>


activity_second.xml

<?xml version="1.0" encoding="utf-8"?>

<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/recyclerView"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

</LinearLayout>


item_row.xml


<?xml version="1.0" encoding="utf-8"?>

<TextView
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/itemText"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:padding="16dp"
    android:textSize="18sp"
    android:textColor="@android:color/black" />




AndroidManifest.xml

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Practical10">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:windowSoftInputMode="adjustResize">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <activity
            android:name=".SecondActivity"
            android:exported="false" />
    </application>

</manifest>


build.gradle (Module: app)

plugins {
    alias(libs.plugins.android.application)
}

android {
    namespace = "com.example.practical10"
    compileSdk {
        version = release(37)
    }

    defaultConfig {
        applicationId = "com.example.practical10"
        minSdk = 24
        targetSdk = 37
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            optimization {
                enable = false
            }
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}

dependencies {
    implementation(libs.activity.ktx)
    implementation(libs.appcompat)
    implementation(libs.constraintlayout)
    implementation(libs.material)
    testImplementation(libs.junit)
    androidTestImplementation(libs.espresso.core)
    androidTestImplementation(libs.ext.junit)
    implementation("androidx.recyclerview:recyclerview:1.3.2")
}







`,
    "output": ``,
    "input": ``
},

}